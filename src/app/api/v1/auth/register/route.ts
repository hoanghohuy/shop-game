import { ApiResponse } from "@/lib/api";
import { validateBody } from "@/middlewares/validateBody";
import { CreateUserDTO, createUserSchema } from "@/validators/user.schema";
import { createUser } from "@/services/user.service";
import { findUserByUsername } from "@/repositories/user.repository";

export async function POST(req: Request) {
  // ✅ Validate body
  const body = await validateBody(req, createUserSchema);
  if (body instanceof Response) return body;

  try {
    const { email, username, password } = body as CreateUserDTO;

    // ✅ Check trùng username
    const existedUser = await findUserByUsername(username);
    if (existedUser) {
      return Response.json(ApiResponse(false, null, "Username đã tồn tại"), {
        status: 400,
      });
    }

    const result = await createUser({ email, username, password });

    return Response.json(ApiResponse(true, result.data));
  } catch (err: any) {
    // ✅ Bắt lỗi unique index
    if (err.code === 11000) {
      return Response.json(ApiResponse(false, null, "Username đã tồn tại"), {
        status: 400,
      });
    }

    return Response.json(
      ApiResponse(false, null, err.message || "Internal Server Error"),
      { status: 500 }
    );
  }
}
