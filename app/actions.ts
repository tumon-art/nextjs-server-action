import { z } from "zod";

export async function deleteTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    todo: z.string().min(1),
  });

  const data = schema.parse({
    todo: formData.get("todo"),
  });
}

try {
} catch (err) {}
