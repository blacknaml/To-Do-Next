"use client";

import { Todo } from "@/lib/interface";
import { Checkbox } from "../ui/checkbox";
import { onCheckChange } from "@/actions/todos/actions";

export default function TodoCheckbox({ todo }: { todo: Todo }) {
  return (
    <Checkbox
      className="mt-0.5 w-5 h-5"
      id={todo?.id as unknown as string}
      checked={todo?.is_complete}
      onCheckedChange={() => {
        onCheckChange(todo);
      }}
    />
  );
}
