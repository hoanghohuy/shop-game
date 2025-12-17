import * as yup from "yup";

export const USERNAME_REGEX = /^[a-z0-9]+$/;

export interface CreateUserDTO {
  email: string;
  username: string;
  password: string;
}

export const createUserSchema: yup.ObjectSchema<CreateUserDTO> = yup.object({
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),

  username: yup
    .string()
    .required("Username là bắt buộc")
    .min(3, "Username tối thiểu 3 ký tự")
    .max(30, "Username tối đa 30 ký tự")
    .matches(
      USERNAME_REGEX,
      "Username chỉ được chứa chữ thường và số, không dấu, không khoảng trắng"
    ),

  password: yup
    .string()
    .required("Password là bắt buộc")
    .min(6, "Password tối thiểu 6 ký tự"),
});
