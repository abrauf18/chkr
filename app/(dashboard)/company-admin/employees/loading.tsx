import Loader from "@/components/shared/loader";
import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-center h-96">
      <Loader />
    </div>
  );
}

export default loading;

