"use client";
import { services } from "@/pages/public/Home/HomeServices";
import { Menu, MenuProps, Popover } from "antd";
import { Facebook, KeySquare, LogIn, User, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Trang chủ",
    key: "home",
    onClick: () => window.location.assign("/"),
  },
  {
    label: "Danh mục",
    key: "categories",
    children: services.map((service) => ({
      label: service.name,
      key: service._id,
    })),
    // children: [
    //   { label: "Option 1", key: "setting:1" },
    //   { label: "Option 2", key: "setting:2" },
    //   {
    //     type: "group",
    //     label: "Item 1",
    //     children: [
    //       { label: "Option 1", key: "setting:1" },
    //       { label: "Option 2", key: "setting:2" },
    //     ],
    //   },
    // ],
  },
  {
    label: "Tin tức",
    key: "news",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header className="max-w-[1200px] mx-auto flex flex-col justify-between">
      <div className="text-xs font-semibold text-slate-700 py-2 flex items-center w-full justify-between border-b border-slate-200">
        <div className="flex gap-2 items-center">
          <Link
            href={"https://facebook.com/hhhoang.h3"}
            target="_blank"
            className="border border-blue-600 p-1 rounded-full"
          >
            <Facebook width={14} height={14} className="text-blue-600" />
          </Link>
          <Link href="tel: 0394210763">0394.210.763 (8:00 - 22:00)</Link>
        </div>
        <Link href={"/login"} className="text-[#D34E4E]">
          Đăng ký bán hàng
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/logo.gif"}
            width={400}
            height={200}
            className="w-40 h-auto"
            alt="logo"
          />
          <Menu
            className="border-b-0! font-bold"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <Popover
          className="pr-3"
          placement="bottomRight"
          title="Tài khoản"
          content={
            <div className="flex flex-col gap-2">
              <Link
                href={"/login"}
                className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
              >
                <LogIn width={16} height={16} />
                <div>Đăng nhập</div>
              </Link>
              <Link
                href={"/register"}
                className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
              >
                <UserRoundPlus width={16} height={16} />
                <div>Đăng ký</div>
              </Link>
              <Link
                href={"/forgot-pass"}
                className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
              >
                <KeySquare width={16} height={16} />
                <div>Quên mật khẩu</div>
              </Link>
            </div>
          }
        >
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer p-2 border border-slate-300 rounded-full">
              <User width={20} height={20} className="text-slate-500" />
            </div>
          </div>
        </Popover>
      </div>
    </header>
  );
}
