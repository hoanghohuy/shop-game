import React from "react";
import ServiceItem from "./ServiceItem";

export const services = [
  {
    _id: 1,
    name: "Tương tác",
    description: "Tăng like, view.share, comment... cho sản phẩm của bạn",
    count: 99,
  },
  {
    _id: 2,
    name: "Dịch vụ phần mềm",
    description:
      "Dịch vụ code tool MMO, đồ họa, video... và các dịch vụ liên quan",
    count: 99,
  },
  {
    _id: 3,
    name: "Blockchain",
    description:
      "TDịch vụ tiền ảo, NFT, coinlist... và các dịch vụ blockchain khác",
    count: 99,
  },
  {
    _id: 4,
    name: "Dịch vụ khác",
    description: "Các dịch vụ MMO phổ biến khác hiện nay",
    count: 99,
  },
];

export default function HomeServices() {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-4 pb-4">
      {services &&
        services.map((item) => <ServiceItem key={item._id} data={item} />)}
    </div>
  );
}
