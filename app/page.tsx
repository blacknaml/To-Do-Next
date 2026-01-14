import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

import Todos from "@/components/todos/todos";
import ClearActions from "@/components/todos/clear-action";
import Main from "@/components/ui/main";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  const { data: profile, error: profileError } = await (await supabase)
    .from("profile")
    .select()
    .eq("user_id", data.user.id);
  if (profileError) {
    throw new Error(profileError.message);
  }

  console.log(profile);

  return (
    <Main>
      <span className="text-sm my-4 text-gray-800">
        Welcome,{" "}
        {profile[0]
          ? profile[0].firstname + " " + profile[0].lastname
          : data.user.email}
      </span>
      <Todos />
      <ClearActions />
    </Main>
  );
}
