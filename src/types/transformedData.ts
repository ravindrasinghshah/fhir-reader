import { Allergy } from "./allergy";
import { FHIR } from "./fhir";

export interface TransformedUserData {
  rawData: FHIR;
  formattedName: string;
  gender: string;
  formattedDOB: string;
}

export const transformFHIRData = (data: FHIR): TransformedUserData => {
  const getName = (): string => {
    const use = data.identifier[0].use;
    const name = data.name.filter((item) => item.use === use);
    if (name && name.length > 0) {
      return name[0].given.join(" ") + " " + (name[0]?.family ?? "");
    }
    return "";
  };

  const getDOB = (): string => {
    const d = new Date(data.birthDate);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  return {
    rawData: data,
    formattedName: getName(),
    gender: data.gender,
    formattedDOB: getDOB(),
  };
};

export interface TransformedAllergyData {
  rawData: Allergy;
  verificationStatus: string;
  category: string;
  criticality: string;
  code: string;
  recordedDate: string;
  note: string;
}
export const transformAllergyData = (data: Allergy): TransformedAllergyData => {
  const getVerificationStatus = (): string => {
    return (
      data.verificationStatus.coding[0].display ||
      data.verificationStatus.coding[0].code
    );
  };
  const getCategory = (): string => {
    return data.category[0];
  };
  const getCriticality = (): string => {
    return data.criticality;
  };
  const getCode = (): string => {
    return data.code.coding[0].display || data.code.coding[0].code;
  };
  const getRecordedDate = (): string => {
    return data.recordedDate;
  };
  const getNote = (): string => {
    return data.note[0].text;
  };

  return {
    rawData: data,
    verificationStatus: getVerificationStatus(),
    category: getCategory(),
    criticality: getCriticality(),
    code: getCode(),
    recordedDate: getRecordedDate(),
    note: getNote(),
  };
};
