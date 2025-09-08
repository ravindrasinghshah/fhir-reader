"use client";
import React, { createContext, useContext, ReactNode } from "react";
import sampleData from "../data/sample.json";
import { FHIR } from "@/types/fhir";
import { TransformedData, transformFHIRData } from "@/types/transformedData";

const DataContext = createContext<TransformedData | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const rawData = sampleData as unknown as FHIR;
  const transformedData = transformFHIRData(rawData);
  return <DataContext.Provider value={transformedData}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
