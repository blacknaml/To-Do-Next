"use client";

import { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { addTodo } from "@/actions/todos/actions";

export default function AddTodo() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <hr className="mt-4 mb-2 border-gray-300" />
      <form
        className="flex outline-none items-center gap-2"
        ref={ref}
        action={async (formData) => {
          await addTodo(formData);
          ref.current?.reset();
        }}
      >
        <Input
          id="task"
          className="p-2 border-none focus-visible:ring-transparent"
          name="task"
          placeholder="Add new task"
          required
        />
        <Button className="min-w-6 h-6 p-0 rounded-md">
          <PlusIcon className="w-4 h-4" />
        </Button>
      </form>
    </>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
