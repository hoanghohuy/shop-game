import { ApiResponse } from "@/lib/api";
import { loginService } from "@/services/user.service";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const result = await loginService(username, password);

    if (!result.success) {
      return Response.json(ApiResponse(false, null, result.message), {
        status: 400,
      });
    }

    return Response.json(ApiResponse(true, result.data));
  } catch (err: any) {
    return Response.json(ApiResponse(false, null, err.message), {
      status: 500,
    });
  }
}
