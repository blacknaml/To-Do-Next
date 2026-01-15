"use client";

import { useEffect, useState } from "react";

import { Input } from "../ui/input";
import { editTodo } from "@/actions/todos/actions";
import { Todo } from "@/lib/interface";

export default function TodoData({ todo }: { todo: Todo }) {
  const [description, setDescription] = useState(todo.task);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDescription(todo.task);
  }, [todo.task]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDescription(newValue);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(async () => {
        await editTodo({ ...todo, task: e.target.value });
      }, 2000)
    );
  };

  return (
    <Input
      className="p-2 rounded-none border-gray-200 focus-visible:ring-transparent"
      value={description}
      onChange={handleInputChange}
    />
  );
}
