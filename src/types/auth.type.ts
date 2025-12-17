interface IRegisterDto {
  email: string;
  username: string;
  password: string;
}

interface ILoginDto {
  username: string;
  password: string;
}

interface ILoginResponse {
  data: {
    accessToken: string;
    user: {
      email: string;
      id: string;
      role: number;
      username: string;
    };
  };
}
