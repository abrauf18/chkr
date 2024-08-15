import React from "react";
import Services from "@/components/modules/company-admin/services/services";
import { GetServiceAction } from "@/actions/services/service-action";

export default async function page() {
  const services = await GetServiceAction();
  console.log(services);
  return <Services services={services} />;
}

