import { z } from "zod";

export const createServiceSchema = z.object({
  organizationId: z.uuid(),
  title: z.string().min(5, "Title must me at least 6 characters long"),
  description: z.string().min(5,"description must be at least 5 characters long"),
  serviceType: z.enum(["ONLINE", "OFFLINE"]),
  durationInMinutes: z.number().min(5).max(720),
  price: z.number().min(0),
  currency: z.string().length(3),
  locationAddress: z.string().optional(),
})
.strict();

export type CreateServiceData = z.infer<typeof createServiceSchema>;