"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const UpdateSession = ({ company_plan }: { company_plan: string }) => {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionUpdate = async () => {
      try {
        if (session) {
          await update({
            ...session,
            user: {
              ...session?.user,
              company_plan: company_plan,
            },
          });
          setLoading(false);
          location.reload();
        }
      } catch (err) {
        console.error("Error updating session:", err);
        setError("Failed to update session. Please try again.");
        setLoading(false);
      }
    };

    sessionUpdate();
  }, [company_plan, session, update]);

  if (loading) {
    return <div>Updating session...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null; // Or provide a success message if desired
};

export default UpdateSession;

