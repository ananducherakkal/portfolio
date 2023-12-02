"use client";
import CompanySection from "@/components/home/companySection";
import ProfileSection from "@/components/home/profileSection";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    console.log("yesss");
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full flex flex-col flex-1 min-h-screen mx-auto">
      <ProfileSection onScroll={handleScrollDown} />
      <CompanySection ref={ref} />
    </main>
  );
}
