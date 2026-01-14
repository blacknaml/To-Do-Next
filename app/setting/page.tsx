import Main from "@/components/ui/main";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { save } from "@/actions/profile/actions";

export default async function SettingPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  const { data: profile, error: error } = await (await supabase)
    .from("profile")
    .select()
    .eq("user_id", user?.id);
  if (error) {
    console.log(error.message);
  }

  return (
    <Main>
      <h2 className="text-base/7 font-semibold text-gray-700 mb-2">
        Account Setting
      </h2>
      <Separator />
      <form action={save}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-4">
            <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4">
              <div className="col-span-full">
                <label
                  htmlFor="firstname"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Firstname
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={profile?.[0]?.firstname ?? ""}
                    id="firstname"
                    type="text"
                    name="firstname"
                    autoComplete="firstname"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="lastname"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Lastname
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={profile?.[0]?.lastname ?? ""}
                    id="lastname"
                    type="text"
                    name="lastname"
                    autoComplete="lastname"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    defaultValue={profile?.[0]?.information ?? ""}
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6"
                  ></textarea>
                </div>
                <p className="mt-1 text-xs/8 text-gray-500">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            <Link href="/">Cancel</Link>
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-3 py-2 text-sm text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </Main>
  );
}
