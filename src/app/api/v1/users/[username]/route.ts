import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/v1/users/[username]">
) {
  const { username } = await ctx.params;
  const searchParams = _req.nextUrl.searchParams;
  const query = searchParams.get("query");
  console.log("query", query);
  return Response.json({ username: username });
}
