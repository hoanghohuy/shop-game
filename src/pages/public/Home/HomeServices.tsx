import React from "react";
import ServiceItem from "./ServiceItem";

export const services = [
  {
    _id: 1,
    path: "/test",
    name: "Tài khoản",
    description:
      "Bán tài khoản giá tốt, tài khoản sơ sinh, trắng thông tin,...",
    count: 99,
  },
  {
    _id: 2,
    path: "/test",
    name: "Dịch vụ cày thuê",
    description: "Cày thuê sức mạnh, lấy vật phẩm, nâng cấp,...",
    count: 99,
  },
  {
    _id: 3,
    path: "/test",
    name: "Bán vật phẩm",
    description: "Mua - bán vật phẩm game, ngọc, đá, vàng,...",
    count: 99,
  },
];

export default function HomeServices() {
  return (
    <div className="mt-1 max-w-[1200px] mx-auto flex flex-col gap-4 pb-4 xs:px-3 xl:px-0">
      {services &&
        services.map((item) => <ServiceItem key={item._id} data={item} />)}
    </div>
  );
}
