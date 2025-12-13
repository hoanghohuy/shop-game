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
  email: string;
  username: string;
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
        email: Yup.string()
          .email("Vui lòng điền email đúng định dạng.")
          .trim()
          .required("Vui lòng điền email của bạn."),
        username: Yup.string().trim().required("Vui lòng điền tên đăng nhập."),
      })
    ),
  });

  const onSubmit = (data: ILogin) => {};

  return (
    <div className="w-full xl:max-w-[400px] mx-auto xs:px-3">
      <h1 className="font-bold text-3xl text-center mt-5">Quên mật khẩu</h1>
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
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Tên đăng nhập của bạn"
            />
          )}
          name="username"
        />
        {<HelperText text={errors.username?.message} />}
        <Button
          loading={isSubmitting}
          htmlType="submit"
          type="primary"
          className="w-full"
        >
          Đặt lại ngay
        </Button>
        <Link href={"/login"}>
          <Button
            loading={isSubmitting}
            htmlType="button"
            type="default"
            className="w-full mt-2"
          >
            Quay về đăng nhập
          </Button>
        </Link>
      </form>
    </div>
  );
}
