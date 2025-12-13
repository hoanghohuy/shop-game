"use client";
import HelperText from "@/components/HelperText";
import InputLabel from "@/components/Label/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Typography } from "antd";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
const { Title } = Typography;

interface ILogin {
  username: string;
  password: string;
}

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>({
    resolver: yupResolver(
      Yup.object().shape({
        username: Yup.string().trim().required("Vui lòng điền tên đăng nhập."),
        password: Yup.string().trim().required("Vui lòng nhập mật khẩu"),
      })
    ),
  });

  const onSubmit = (data: ILogin) => {};

  return (
    <div className="w-full max-w-[400px] mx-auto xs:px-3">
      <h1 className="font-bold text-3xl text-center mt-5">Đăng nhập</h1>
      <form
        className="w-full py-2 min-h-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel required>Tên đăng nhập</InputLabel>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
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
        >
          Đăng nhập
        </Button>
        <Link href={"/register"}>
          <Button
            loading={isSubmitting}
            htmlType="button"
            type="default"
            className="w-full mt-2"
          >
            Đăng ký tài khoản
          </Button>
        </Link>
      </form>
    </div>
  );
}
