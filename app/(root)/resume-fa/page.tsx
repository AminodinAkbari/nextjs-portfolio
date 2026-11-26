"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ResumeFaPage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_FA_LINK || "/");
  }, []);
  return <div>Redirecting to the resume...</div>;
}