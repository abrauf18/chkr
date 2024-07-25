"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const UpdateSession = ({
  company_plan,
  stripe_connect_account_id,
}: {
  company_plan?: string;
  stripe_connect_account_id?: string;
}) => {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const sessionUpdate = async () => {
      try {
        setLoading(true);
        if (session && !isUpdated) {
          if (stripe_connect_account_id) {
            await update({
              ...session,
              user: {
                ...session.user,
                stripe_connect_account_id: stripe_connect_account_id,
              },
            });
          } else if (company_plan) {
            await update({
              ...session,
              user: {
                ...session.user,
                company_plan: company_plan,
              },
            });
          }
          setIsUpdated(true);
          location.reload();
        }
      } catch (err) {
        console.error("Error updating session:", err);
        setError("Failed to update session. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (session && !isUpdated) {
      sessionUpdate();
    }
  }, [session, company_plan, stripe_connect_account_id, isUpdated]);

  if (loading) {
    return <div>Updating session...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null; // Or provide a success message if desired
};

export default UpdateSession;

