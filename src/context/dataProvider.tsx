"use client";
import React, { createContext, useContext, ReactNode } from "react";
import _patientData from "../data/patient.json";
import _allergyData from "../data/foodAllergy.json";
import { FHIR } from "@/types/fhir";
import {
  transformAllergyData,
  TransformedAllergyData,
  TransformedUserData,
  transformFHIRData,
} from "@/types/transformedData";
import { Allergy } from "@/types/allergy";

type DataContextType =
  | {
      patientData: TransformedUserData;
      allergyData: TransformedAllergyData;
    }
  | undefined;

const DataContext = createContext<DataContextType>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const rawData = _patientData as unknown as FHIR;
  const rawAllergyData = _allergyData as unknown as Allergy;

  const patientData = transformFHIRData(rawData);
  const allergyData = transformAllergyData(rawAllergyData);

  return (
    <DataContext.Provider value={{ patientData, allergyData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
