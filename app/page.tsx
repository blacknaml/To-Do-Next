import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import Todos from "@/components/todos/todos";
import ClearActions from "@/components/todos/clear-action";
import { SideDropDown } from "@/components/ui/sidedropdown";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await (await supabase).auth.getUser();

  console.log(data);

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col max-w-2xl border rounded-lg shadow-lg p-4">
        <div className="flex flex-row items-center justify-between gap-4 pb-4">
          <div className="flex flex-row gap-2">
            <CheckCircleIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <h1 className="font-semibold text-2xl">Todoku</h1>
          </div>
          <SideDropDown />
        </div>
        <span className="text-sm my-4 text-gray-800">
          Welcome, {data.user.email}
        </span>
        <Todos />
        <ClearActions />
      </div>
    </main>
  );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
  );
}
