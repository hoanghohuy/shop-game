import * as yup from "yup";

export interface LoginDTO {
  username: string;
  password: string;
}

export const loginSchema: yup.ObjectSchema<LoginDTO> = yup.object({
  username: yup
    .string()
    .transform((v) => v?.trim().toLowerCase())
    .required("Username là bắt buộc"),

  password: yup.string().required("Password là bắt buộc"),
});
