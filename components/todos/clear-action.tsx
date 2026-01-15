"use client";

import { deleteAllTodos, deleteCompletedTodos } from "@/actions/todos/actions";
import { Button } from "../ui/button";

export default function ClearActions() {
  return (
    <div className="flex items-center gap-2 border-t mt-2 pt-2">
      <Button
        onClick={async () => {
          await deleteCompletedTodos();
        }}
        size="sm"
        variant="outline"
      >
        Clear completed Todos
      </Button>
      <Button
        onClick={async () => {
          await deleteAllTodos();
        }}
        className="ml-auto"
        size="sm"
      >
        Clear all Todos
      </Button>
    </div>
  );
}
