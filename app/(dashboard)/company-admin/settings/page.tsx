import React from "react";
import Settings from "@/components/shared/settings";
import { UserInfoAction } from "@/actions/settings/settings-action";

export default async function page() {
  const data = await UserInfoAction();
  return <Settings isAdmin data={data} />;
}

