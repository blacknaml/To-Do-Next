"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await (await supabase).auth.signUp(data);
  if (error) {
    //throw new Error(error.message);
    const errorMessage = encodeURIComponent(error.message);
    redirect(`/signup?message=${errorMessage}`);
  }

  const successMessage = encodeURIComponent(
    "We've sent you an email to confirm. Just a quick reminder to check your email and confirm it."
  );
  revalidatePath("/", "layout");
  redirect(`/signup?message=${successMessage}`);
}

export async function signin(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await (await supabase).auth.signInWithPassword(data);
  if (error) {
    //throw new Error(error.message);

    const errorMessage = encodeURIComponent(error.message);
    redirect(`/signin?message=${errorMessage}`);
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  const supabase = createClient();

  const { error } = await (await supabase).auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/signin");
}
