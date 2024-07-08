'use client'
import EditCompanyProfile from "@/components/modules/super-admin/companies/edit-company-profile";
import React, { useEffect, useState } from "react";

type EditProfilePageProps = {
  params: {
    id: number;
  };
};

const EditProfilePage: React.FC<EditProfilePageProps> = ({ params }) => {
  const [companyId, setCompanyId] = useState<number | null>(null);

  useEffect(() => {
    // Update companyId state when params.id changes
    setCompanyId(params.id);
  }, [params.id]);

  return <EditCompanyProfile companyId={companyId} />;
};

export default EditProfilePage;
