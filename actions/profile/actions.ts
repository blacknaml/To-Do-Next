"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function save(formData: FormData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  const data = {
    user_id: user?.id,
    firstname: formData.get("firstname") as string,
    lastname: formData.get("lastname") as string,
    information: formData.get("about") as string,
  };

  const { error } = await (await supabase)
    .from("profile")
    .upsert(data)
    .select();
  if (error) {
    const errorMessage = encodeURIComponent(error.message);
    redirect(`/setting?message=${errorMessage}`);
  }

  const successMessage = encodeURIComponent("Account setting was updated.");
  revalidatePath("/", "layout");
  redirect(`/setting?message=${successMessage}`);
}
