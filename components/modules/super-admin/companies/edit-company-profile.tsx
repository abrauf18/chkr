import React from "react";
import CompanyInformation from "../../company-admin/settings/company-information";
import { useCompanyData } from "./companydata-context";
import Loader from "@/components/shared/loader";

type EditCompanyProfileProps = {
  companyId: number | null;
};

const EditCompanyProfile: React.FC<EditCompanyProfileProps> = ({
  companyId,
}) => {
  const { data } = useCompanyData();
  if (!data || !companyId) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader />
      </div>
    );
  }
  const companyData = data?.find((company) => company.id === +companyId);

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl mb-2">Edit Company Profile</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4">
        <div className="bg-white rounded-xl p-3">
          <h1 className="text-lg font-semibold">
            Fill out the Company Information
          </h1>
          <hr className="my-3" />
          {companyData && (
            <CompanyInformation
              currentImage={companyData.company_logo}
              companyinfo={{
                id: companyData.id,
                company_name: companyData.company_name,
                firm_name: companyData.firm.firm_name,
                phone_number: companyData.phone_number,
                location: companyData.location,
                country: companyData.country,
                company_logo: companyData.company_logo,
                company_admin: companyData.company_admin,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditCompanyProfile;

