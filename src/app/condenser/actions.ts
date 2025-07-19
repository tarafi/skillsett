"use server";

import { z } from "zod";
import { condenseContent } from "@/ai/flows/content-condenser";

const formSchema = z.object({
  content: z.string().min(20, {
    message: "Content must be at least 20 characters.",
  }).max(5000, {
    message: "Content must not exceed 5000 characters.",
  }),
});

export async function generateSummaryAction(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
      summary: null,
    };
  }

  try {
    const result = await condenseContent({ content: validatedFields.data.content });
    return {
      message: "success",
      summary: result.summary,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred.",
      summary: null,
      errors: null,
    };
  }
}
