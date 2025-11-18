export function ApiResponse(
  success: boolean,
  data: any = null,
  message?: string
) {
  return {
    success,
    data,
    message: message || null,
  };
}
