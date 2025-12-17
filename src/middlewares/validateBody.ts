import { AnyObjectSchema } from "yup";
import { ApiResponse } from "@/lib/api";

export async function validateBody<T>(
  req: Request,
  schema: AnyObjectSchema
): Promise<T | Response> {
  try {
    const body = await req.json();

    const validated = await schema.validate(body, {
      abortEarly: true,
      stripUnknown: true,
    });

    return validated as T;
  } catch (err: any) {
    return Response.json(ApiResponse(false, null, err.message), {
      status: 400,
    });
  }
}
