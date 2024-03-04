import { Status } from "@prisma/client";
import { z } from "zod";

const statusValues = ["OPEN", ...Object.values(Status)] as const;

export const issueSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(1, "description is required"),
  status: z.enum(statusValues),
});
