"use client";
import { ReactNode } from "react";
import { SideDropDown } from "@/components/ui/sidedropdown";
import Link from "next/link";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col max-w-2xl border rounded-lg shadow-lg p-4">
        <div className="flex flex-row items-center justify-between gap-4 pb-4">
          <div className="flex flex-row gap-2">
            <CheckCircleIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h1 className="font-semibold text-2xl">
              <Link href="/">Todoku</Link>
            </h1>
          </div>
          <SideDropDown />
        </div>
        {children}
      </div>
    </main>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Link href="/">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    </Link>
  );
}
