"use client";
import React from "react";
import { Button, Input, Select, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const { Title } = Typography;
import * as Yup from "yup";
import HelperText from "@/components/HelperText";

interface IChargeMoney {
  network: string;
  amount: number;
  serial: string;
  code: string;
}

export default function ChargeMoney() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IChargeMoney>({
    resolver: yupResolver(
      Yup.object().shape({
        network: Yup.string().required("Vui lòng chọn nhà mạng"),
        amount: Yup.number().required("Vui lòng chọn mệnh giá"),
        serial: Yup.string().required("Vui lòng nhập số seri"),
        code: Yup.string().required("Vui lòng nhập mã thẻ"),
      })
    ),
  });

  const onSubmit = (data: IChargeMoney) => {};

  return (
    <div className="bg-white w-full pt-3 pb-5 px-5 rounded-md">
      <Title level={4}>NẠP THẺ</Title>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              className="w-full"
              placeholder="Chọn nhà mạng"
              onChange={onChange}
              options={[
                { value: "viettel", label: <span>Viettel</span> },
                { value: "vinaphone", label: <span>Vinaphone</span> },
                { value: "mobiphone", label: <span>Mobiphone</span> },
              ]}
            />
          )}
          name="network"
        />
        <HelperText text={errors.network?.message} />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              className="w-full"
              placeholder="Chọn mệnh giá"
              onChange={onChange}
              options={[
                { value: 10000, label: <span>10,000</span> },
                { value: 20000, label: <span>20,000</span> },
                { value: 50000, label: <span>50,000</span> },
                { value: 100000, label: <span>100,000</span> },
                { value: 200000, label: <span>200,000</span> },
                { value: 500000, label: <span>500,000</span> },
              ]}
            />
          )}
          name="amount"
        />
        {<HelperText text={errors.amount?.message} />}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Số seri"
            />
          )}
          name="serial"
        />
        {<HelperText text={errors.serial?.message} />}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              className="w-full"
              value={value}
              onChange={onChange}
              placeholder="Mã số thẻ"
            />
          )}
          name="code"
        />
        {<HelperText text={errors.code?.message} />}
        <Button htmlType="submit" type="primary" className="w-full mt-1">
          Nạp ngay
        </Button>
      </form>
    </div>
  );
}
