import _ from "lodash";
import { countryList } from "./countryList";

export type InputDataType = "string" | "email" | "date" | "select";
export type FormDataKYC = {
  label: string;
  inputDataType: InputDataType;
  options?: string[];
  explaination?: string;
}[];

export const customerProfileData: FormDataKYC = [
  {
    label: "Legal First Name",
    inputDataType: "string",
  },
  {
    label: "Legal Last Name",
    inputDataType: "string",
  },
  {
    label: "Email Address",
    inputDataType: "email",
  },
  {
    label: "Country of Tax Residence",
    inputDataType: "select",
    options: countryList,
  },
  {
    label: "Country of Citizenship",
    inputDataType: "select",
    options: countryList,
  },
  {
    label: "Date of Birth",
    inputDataType: "date",
  },
  {
    label: "Tax ID",
    inputDataType: "string",
  },
  {
    label: "Tax ID type",
    inputDataType: "string",
  },
  {
    label: "Residential Address",
    inputDataType: "string",
  },
  {
    label: "Unit / Apt #",
    inputDataType: "string",
  },
  {
    label: "City",
    inputDataType: "string",
  },
  {
    label: "Country",
    inputDataType: "select",
    options: countryList,
  },
];
export const financialProfileData: FormDataKYC = [
  {
    label: "Investible / Liquid Assets",
    inputDataType: "select",
    options: [
      "0 - $20,000",
      "$20,000 - $49,999",
      "$50,000 - $99,999",
      "$100,000 - $499,999",
      "$500,000 - $999,999",
      "$1,000,000 - $9,999,999",
    ],
    explaination:
      "Investible / Liquid assets is your net worth minus assets that cannot be converted quickly and easily into cash, such as real estate, business equity, personal property and automobiles, expected inheritances, assets earmarked for other purposes, and investments or accounts subject to substantial penalties if they were sold or if assets were withdrawn from them.  Annual",
  },
  {
    label: "Account Funding Source",
    inputDataType: "select",
    options: [
      "Employment_income",
      "Investments",
      "Inheritance",
      "Business_income",
      "Savings",
      "Family",
    ],
  },
  {
    label: "Employment Status ",
    inputDataType: "select",
    options: ["Employed", "Unemployed", "Student", "Retired"],
  },
  {
    label: "Name of Employer",
    inputDataType: "string",
  },
  {
    label: "Employer Address",
    inputDataType: "string",
  },
  {
    label: "Occupation / Job Title",
    inputDataType: "string",
  },
];

export const logTypes = (formData: FormDataKYC) => {
  let res = "";
  formData.forEach((e) => {
    //console.log(`${_.camelCase(e.label)}:string;`)
    res += `${_.camelCase(e.label)}:string;`;
  });
  console.log(res);
};

export interface CustomerProfileData {
  legalFirstName: string;
  legalLastName: string;
  emailAddress: string;
  countryOfTaxResidence: string;
  countryOfCitizenship: string;
  dateOfBirth: string;
  taxId: string;
  taxIdType: string;
  residentialAddress: string;
  unitApt: string;
  city: string;
  country: string;
}

export interface FinancialProfileData {
  investibleLiquidAssets: string;
  accountFundingSource: string;
  employmentStatus: string;
  nameOfEmployer: string;
  employerAddress: string;
  occupationJobTitle: string;
}
