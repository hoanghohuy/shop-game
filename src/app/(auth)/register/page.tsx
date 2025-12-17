"use client";
import HelperText from "@/components/HelperText";
import InputLabel from "@/components/Label/InputLabel";
import { AuthService } from "@/services/frontend/auth/auth.service";
import { USERNAME_REGEX } from "@/validators/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, message } from "antd";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

export default function page() {
  const [messageApi, contextHolder] = message.useMessage();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterDto>({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string()
          .email("Vui lòng điền email đúng định dạng")
          .trim()
          .required("Vui lòng điền email của bạn"),
        username: Yup.string()
          .trim()
          .required("Vui lòng điền tên đăng nhập")
          .min(5, "Username tối thiểu 5 ký tự")
          .max(16, "Username tối đa 16 ký tự")
          .matches(USERNAME_REGEX, "Username chỉ chứa kí tự thường và số"),
        password: Yup.string()
          .trim()
          .required("Vui lòng nhập mật khẩu")
          .min(6, "Mật khẩu có tối thiểu 6 ký tự")
          .max(32, "Mật khẩu phải có tối đa 32 ký tự"),
      })
    ),
  });

  const onSubmit = async (data: IRegisterDto) => {
    try {
      await AuthService.register(data);
      messageApi.open({
        type: "success",
        content: "Đăng ký tài khoản thành công!",
      });
    } catch (error: any) {
      if (error.status == 400) {
        messageApi.open({
          type: "error",
          content: "Tên đăng nhập đã tồn tại! Vui lòng thử lại",
        });
        return;
      }
      messageApi.open({
        type: "error",
        content: "Đã có lỗi xảy ra, vui lòng thử lại sau!",
      });
    }
  };

  return (
    <div className="w-full xl:max-w-[400px] mx-auto xs:px-3">
      <h1 className="font-bold text-3xl text-center mt-5">Đăng ký</h1>
      <form
        className="w-full py-2 min-h-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel required>Email</InputLabel>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              size="large"
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Nhập email của bạn"
            />
          )}
          name="email"
        />
        {<HelperText text={errors.email?.message} />}
        <InputLabel required>Tên đăng nhập</InputLabel>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              size="large"
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Tên đăng nhập của bạn"
            />
          )}
          name="username"
        />
        {<HelperText text={errors.username?.message} />}
        <InputLabel required>Mật khẩu</InputLabel>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              size="large"
              type={showPassword ? "text" : "password"}
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Mật khẩu của bạn"
              suffix={
                <div
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <Eye width={16} height={16} />
                  ) : (
                    <EyeClosed
                      width={16}
                      height={16}
                      className="text-gray-500"
                    />
                  )}
                </div>
              }
            />
          )}
          name="password"
        />
        {<HelperText text={errors.password?.message} />}
        <Button
          loading={isSubmitting}
          htmlType="submit"
          type="primary"
          className="w-full"
          size="large"
        >
          Đăng ký ngay
        </Button>
        <Link href={"/login"}>
          <Button
            size="large"
            htmlType="button"
            type="default"
            className="w-full mt-2"
          >
            Đã có tài khoản?
          </Button>
        </Link>
      </form>
      {contextHolder}
    </div>
  );
}
