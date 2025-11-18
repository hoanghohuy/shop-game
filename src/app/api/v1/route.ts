export async function GET(request: Request) {
  const url = request.url;
  console.log("url", url);
  return Response.json({ message: "Hello World" });
}
