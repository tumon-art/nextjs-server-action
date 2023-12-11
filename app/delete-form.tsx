"use client";

import { useFormState, useFormStatus } from "react-dom";
import { deleteTodo } from "./actions";

const initialState = {
  message: null,
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Delete
    </button>
  );
}

export default function DeleteTodo({ todo }: { todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);
  return (
    <form action={formAction}>
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}