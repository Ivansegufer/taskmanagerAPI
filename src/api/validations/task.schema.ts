import { object, boolean, string, TypeOf } from "zod";

const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    })
      .min(5, "Name too short - should be 5 chars minimum")
      .max(20, "Name too long - Should be 20 chars maximum"),
    description: string({
      required_error: "Description is required",
    })
      .min(5, "Description too short - should be 5 chars minimum")
      .max(40, "Description too long - Should be 40 chars maximum"),
    completed: boolean().optional(),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "The product id is required",
    }),
  }),
};

const query = {
  query: object({
    completed: string()
      .transform((value) => value.trim().toLowerCase())
      .optional(),
  }),
};

export const createTaskSchema = object({
  ...payload,
});

export const getTaskSchema = object({
  ...params,
});

export const getAllTasksSchema = object({
  ...query,
});

export const deleteTaskSchema = object({
  ...params,
});

export const updateTaskSchema = object({
  ...params,
  body: payload.body.partial(),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>;
export type GetTaskInput = TypeOf<typeof getTaskSchema>;
export type GetAllTasksInput = TypeOf<typeof getAllTasksSchema>;
export type DeleteTaskSchema = TypeOf<typeof deleteTaskSchema>;
export type UpdateTaskSchema = TypeOf<typeof updateTaskSchema>;
