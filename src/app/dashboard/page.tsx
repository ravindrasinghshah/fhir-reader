"use client";
import UserDetails from "../components/UserDetails";
import { useData } from "@/context/dataProvider";
import Navigation from "../components/Navigation";
import AllergySVG from "../components/svg/allergy";

export default function DashboardPage() {
  const data = useData();
  const patient = data.patientData;
  const allergy = data.allergyData;
  return (
    <>
      <div className="min-h-full">
        <Navigation />
        <header className="relative bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="font-bold tracking-tight text-gray-900">
              <UserDetails
                name={patient.formattedName}
                gender={patient.gender}
                dob={patient.formattedDOB}
              />
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 w-sm">
              <div className="flex justify-items-start content-start">
                <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                  <AllergySVG />
                </span>
                <h2 className="text-gray-900 text-3xl dark:text-white pl-1.5">
                  Allergies
                </h2>
              </div>

              <p className="text-gray-500 dark:text-gray-400 mt-5 text-sm">
                Category: {allergy.category} | From: {allergy.code} | Critical:
                {allergy.criticality} | Recorded on:
                {new Date(allergy.recordedDate).toLocaleDateString()}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-5 text-sm border-l-4 border-red-600 pl-1">
                {allergy.note}
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
