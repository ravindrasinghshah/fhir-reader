"use client";
import React from "react";
import UserDetails from "../components/UserDetails";
import { useData } from "@/context/dataProvider";

export default function Dashboard() {
  const data = useData();
  return (
    <div>
      <h2>Dashboard Page</h2>
      <UserDetails
        name={data.formattedName}
        gender={data.gender}
        dob={data.formattedDOB}
      />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
