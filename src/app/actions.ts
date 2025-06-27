"use server";

import { generateProjectDescription, GenerateProjectDescriptionInput, GenerateProjectDescriptionOutput } from "@/ai/flows/generate-project-description";
import { z } from "zod";

const formSchema = z.object({
  projectName: z.string(),
  projectDetails: z.string(),
  targetAudience: z.string(),
  desiredTone: z.string(),
});

export async function generateProjectDescriptionAction(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput | { error: string }> {
  const validatedInput = formSchema.safeParse(input);
  if (!validatedInput.success) {
    return { error: "Invalid input." };
  }
  
  try {
    const result = await generateProjectDescription(validatedInput.data);
    return result;
  } catch (error) {
    console.error("Error generating project description:", error);
    return { error: "An unexpected error occurred." };
  }
}
