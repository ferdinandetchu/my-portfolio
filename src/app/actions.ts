"use server";

import { debugCode, DebugCodeInput, DebugCodeOutput } from "@/ai/flows/debug-code";
import { z } from "zod";

const formSchema = z.object({
  code: z.string().min(10, { message: 'Please provide some code to analyze.' }),
});

export async function debugCodeAction(
  input: DebugCodeInput
): Promise<DebugCodeOutput | { error: string }> {
  const validatedInput = formSchema.safeParse(input);
  if (!validatedInput.success) {
    const issues = validatedInput.error.issues.map(i => i.message).join(' ');
    return { error: `Invalid input: ${issues}` };
  }
  
  try {
    const result = await debugCode(validatedInput.data);
    return result;
  } catch (error) {
    console.error("Error debugging code:", error);
    return { error: "An unexpected error occurred while analyzing the code." };
  }
}
