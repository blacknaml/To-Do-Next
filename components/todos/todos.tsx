import { createClient } from "@/utils/supabase/server";
import AddTodo from "./add-todo";
import Todo from "./todo";
import { Suspense } from "react";

export default async function Todos() {
  const supabase = createClient();

  const { data: todos, error } = await (await supabase)
    .from("todos")
    .select("*");
  if (error) {
    throw new Error(error.message);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-1">
          {todos &&
            todos
              .filter((todo) => {
                return todo.is_complete == false;
              })
              .map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
              })}
          {todos &&
            todos
              .filter((todo) => {
                return todo.is_complete;
              })
              .map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
              })}
        </div>
        <AddTodo />
      </div>
    </Suspense>
  );
}
