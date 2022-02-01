import { object, boolean, string, TypeOf } from "zod";

export const createTaskSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    description: string({
      required_error: "Descriptioin is required",
    }),
    completed: boolean().default(false),
  }),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
