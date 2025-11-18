import { ApiResponse } from "@/lib/api";
import { createUser, getUsers } from "@/services/user.service";

export async function GET() {
  const users = await getUsers();
  return Response.json(ApiResponse(true, users));
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = await createUser(body);
  return Response.json(user);
}
