import { CompanyInfo } from "./company-info";

export interface CompanyInfoResponse {
  id: number;
  title: {
    rendered: string;
  };
  acf: CompanyInfo;
}
