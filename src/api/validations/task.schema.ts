import { object, boolean, string, TypeOf } from "zod";

export const createTaskSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }).min(5, "Name too short - should be 5 chars minimum"),
    description: string({
      required_error: "Descriptioin is required",
    }),
    completed: boolean().optional(),
  }),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
