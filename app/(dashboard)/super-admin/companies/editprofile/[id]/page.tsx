import EditCompanyProfile from "@/components/modules/super-admin/companies/edit-company-profile";
import React from "react";

type EditProfilePageProps = {
  params: {
    id: number;
  };
};

const EditProfilePage: React.FC<EditProfilePageProps> = ({ params }) => {
  console.log(+params.id);
  return <EditCompanyProfile />;
};

export default EditProfilePage;
