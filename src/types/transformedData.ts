import { FHIR } from "./fhir";

export interface TransformedData {
  rawData: FHIR;
  formattedName: string;
  gender: string;
  formattedDOB: string;
}

export const transformFHIRData = (data: FHIR): TransformedData => {
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
    formattedDOB: getDOB()
  };
};
