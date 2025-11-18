import { Button } from "antd";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productType = [
  { _id: 1, name: "Tài khoản giá tốt", count: 100, image: "/test.jpg" },
  { _id: 2, name: "Tài khoản giá tốt 2", count: 100, image: "/test.jpg" },
  { _id: 3, name: "Tài khoản giá tốt 3", count: 100, image: "/test.jpg" },
  { _id: 4, name: "Tài khoản giá tốt 4", count: 100, image: "/test.jpg" },
  { _id: 5, name: "Tài khoản giá tốt 5", count: 100, image: "/test.jpg" },
];

export default function ServiceItem({
  data,
}: {
  data: { _id: number; name: string; description: string; count: number };
}) {
  return (
    <div className="bg-white p-4 rounded-md" key={data?._id}>
      <div className="flex items-center justify-between">
        <h2 className="uppercase font-bold text-lg">{data?.name}</h2>
        <Button
          type="primary"
          iconPosition="end"
          icon={<MoveRight width={14} height={14} />}
        >
          Xem thêm
        </Button>
      </div>
      <div className="italic text-sm">{data?.description}</div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {productType.map((item) => (
          <Link
            href={"/danh-muc/account"}
            className="relative border border-slate-300 rounded-md overflow-hidden hover:opacity-85"
          >
            <div className="absolute left-0 top-0 bg-red-600 text-white px-4 text-sm py-1 font-bold">
              Mới
            </div>
            <div className="absolute right-0 top-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold">
              Phổ biến
            </div>
            <Image src={item.image} width={1000} height={400} alt={item.name} />
            <div className="px-3 py-2">
              <h3 className="font-semibold">{item.name}</h3>
              <div className="text-xs">
                Hiện có: <span className="text-red-500">{item.count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
