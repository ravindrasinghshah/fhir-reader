"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // add validation or authentication logic here
    router.push("/dashboard");
  };

  return (
    <div className="border-2 p-6 border-emerald-200 rounded-md flex justify-center flex-col">
      <h2 className="pb-2">Log in</h2>
      <input
        type="email"
        placeholder="Enter your email address"
        className="border-emerald-100 border-2 my-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", marginBottom: "12px", width: "250px" }}
      />
      <button
        className="p-5 bg-amber-200 cursor-pointer disabled:bg-amber-50 disabled:cursor-not-allowed "
        onClick={handleLogin}
        disabled={!email}
      >
        Log in
      </button>
    </div>
  );
}
