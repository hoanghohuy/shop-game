import axiosInstance from "@/lib/axios";

export class AuthService {
  static register(payload: IRegisterDto) {
    return axiosInstance
      .post("/api/v1/auth/register", payload)
      .then((res) => res.data);
  }

  static login(payload: ILoginDto): Promise<ILoginResponse> {
    return axiosInstance
      .post("/api/v1/auth/login", payload)
      .then((res) => res.data);
  }
}
