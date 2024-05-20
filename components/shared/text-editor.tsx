import React, { useState, useEffect } from "react";
import EditorJS, { OutputData, API } from "@editorjs/editorjs";
import { Button } from "../ui/button";

const TextEditor = () => {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const [editorData, setEditorData] = useState<OutputData | null>(null);

  useEffect(() => {
    let editorInstance: EditorJS | null = null;

    const initializeEditor = async () => {
      try {
        editorInstance = new EditorJS({
          onChange: async (api: API) => {
            try {
              const data: OutputData = await api.saver.save();
              setEditorData(data);
            } catch (error) {
              console.error("Error saving editor data:", error);
            }
          },
        });
        setEditor(editorInstance);
      } catch (error) {
        console.error("Error initializing editor:", error);
      }
    };

    initializeEditor();

    return () => {
      if (editorInstance) {
        if (typeof editorInstance.destroy === "function") {
          editorInstance.destroy();
        }
      }
    };
  }, []);

  const handleGetEditorData = async () => {
    if (editor) {
      try {
        const data: OutputData = await editor.save();
        console.log("Editor data:", data);
      } catch (error) {
        console.error("Error getting editor data:", error);
      }
    }
  };

  return (
    <div className="relative">
      <div
        id="editorjs"
        contentEditable
        className="cdx-block min-h-32 p-2 rounded-lg border mt-2"
      />
      <Button
        className="absolute z-10 bottom-2 right-2 text-white rounded-full w-24 "
        onClick={handleGetEditorData}
      >
        Share
      </Button>
    </div>
  );
};

export default TextEditor;

