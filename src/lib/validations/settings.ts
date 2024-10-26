import * as z from "zod";

export const settingsSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  language: z.string(),
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
  }),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;