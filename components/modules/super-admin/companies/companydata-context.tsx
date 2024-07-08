"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { GetCompanyAction } from "@/actions/company/company-action";
import { CompanyInterface } from "@/lib/interfaces";
import { toast } from "react-toastify";

interface CompanyDataContextProps {
  data: CompanyInterface[] | null;
  loading: boolean;
  error: Error | null;
}
const CompanyDataContext = createContext<CompanyDataContextProps | undefined>(
  undefined
);

// a provider component
export const CompanyDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CompanyInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetCompanyAction();
        if (response.statusCode !== 200) {
          return toast.error(response.message);
        }
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <CompanyDataContext.Provider value={{ data, loading, error }}>
      {children}
    </CompanyDataContext.Provider>
  );
};

// Create a custom hook to use the CompanyDataContext
export const useCompanyData = () => {
  const context = useContext(CompanyDataContext);
  if (context === undefined) {
    throw new Error("useCompanyData must be used within a CompanyDataProvider");
  }
  return context;
};

