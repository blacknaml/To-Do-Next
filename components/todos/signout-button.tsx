"use client";

import { signout } from "@/actions/auth/actions";
import { Button } from "../ui/button";

export default function SignOutButton() {
  return (
    <Button
      variant="ghost"
      onClick={async () => {
        await signout();
      }}
      className="text-red-700 hover:text-white hover:bg-red-900"
    >
      Sign out
    </Button>
  );
}
