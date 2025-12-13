import { Breadcrumb } from "antd";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productType = [
  {
    _id: 1,
    name: "Tài khoản giá tốt",
    category: "Danh mục 1",
    image: "/test.jpg",
  },
  {
    _id: 2,
    name: "Tài khoản giá tốt 2",
    category: "Danh mục 1",
    image: "/test.jpg",
  },
  {
    _id: 3,
    name: "Tài khoản giá tốt 3",
    category: "Danh mục 1",
    image: "/test.jpg",
  },
  {
    _id: 4,
    name: "Tài khoản giá tốt 4",
    category: "Danh mục 1",
    image: "/test.jpg",
  },
  {
    _id: 5,
    name: "Tài khoản giá tốt 5",
    category: "Danh mục 1",
    image: "/test.jpg",
  },
];

export default function page() {
  return (
    <div className="max-w-[1200px] mx-auto pb-4">
      <div className="xl:px-0 xs:px-3">
        <div className="h-[200px] xl:h-[300px] text-white font-bold text-3xl bg-slate-700 rounded-lg flex items-center justify-center ">
          Cẩm nang chơi game
        </div>
      </div>
      <div className="mt-3 xl:px-0 xs:px-3 flex items-center gap-1">
        <Home width={16} height={16} />
        <Breadcrumb
          className="text-slate-800!"
          items={[
            {
              title: (
                <Link href={"/"} className="text-slate-800!">
                  Trang chủ
                </Link>
              ),
            },
            {
              title: <div className="text-slate-800!">Tin tức</div>,
            },
          ]}
        />
      </div>
      <div>
        <div className="mt-1 max-w-[1200px] mx-auto flex flex-col gap-4 pb-4 xs:px-3 xl:px-0">
          <div className="bg-white rounded-md">
            <div className="grid gap-2 mt-2 xs:grid-cols-2 xl:grid-cols-4">
              {productType.map((item) => (
                <Link
                  key={item._id}
                  href={"/danh-muc/account"}
                  className="relative border border-slate-300 rounded-md hover:opacity-85"
                >
                  <div className="absolute -left-1.5 top-2">
                    <div className="bg-green-500 text-white px-3 text-xs py-1 font-bold rounded-r-xs">
                      {item.category}
                    </div>
                    <div className="w-0 h-0 border-l-6 border-l-transparent border-t-6 border-t-green-600"></div>
                  </div>
                  <Image
                    src={item.image}
                    width={1000}
                    height={400}
                    alt={item.name}
                  />
                  <div className="px-3 py-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="text-xs">Ngày xuất bản: 13/12/2025</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
