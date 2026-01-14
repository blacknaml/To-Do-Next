"use client";

import { signout } from "@/actions/auth/actions";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        await signout();
      }}
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
    >
      Sign out
    </button>
  );
}
