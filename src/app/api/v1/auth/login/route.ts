import { ApiResponse } from "@/lib/api";
import { validateBody } from "@/middlewares/validateBody";
import { loginSchema, LoginDTO } from "@/validators/auth.schema";
import { loginUser } from "@/services/auth.service";

export async function POST(req: Request) {
  const body = await validateBody<LoginDTO>(req, loginSchema);
  if (body instanceof Response) return body;

  try {
    const result = await loginUser(body);
    return Response.json(ApiResponse(true, result.data));
  } catch (err: any) {
    return Response.json(
      ApiResponse(false, null, err.message || "Login failed"),
      { status: 401 }
    );
  }
}
