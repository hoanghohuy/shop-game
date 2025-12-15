"use client";
import { services } from "@/pages/public/Home/HomeServices";
import { useAuthStore } from "@/store/authStore";
import { Drawer, MenuProps, Menu, Popover, Button } from "antd";
import {
  Facebook,
  KeySquare,
  LogIn,
  Menu as MenuIcon,
  User,
  UserRoundPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Trang chủ",
    key: "/",
    onClick: () => window.location.assign("/"),
  },
  {
    label: "Danh mục",
    key: "/categories",
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
    key: "/blog",
    onClick: () => window.location.assign("/blog"),
  },
  {
    label: "Nạp tiền điện tử",
    key: "deposit",
    onClick: () => window.location.assign("/deposit"),
  },
];

export default function Header() {
  const { logout, isAuthenticated } = useAuthStore();
  const path = usePathname();
  const [current, setCurrent] = useState("/");
  const [open, setOpen] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  useEffect(() => {
    if (path) {
      setCurrent(path);
    }
  }, []);

  return (
    <header className=" bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-between">
        <div className="text-xs font-semibold text-slate-700 py-2 flex items-center w-full justify-between border-b border-slate-200 xs:px-3">
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
        <div className="flex items-center justify-between xs:px-3">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Image
                src={"/logo.gif"}
                width={400}
                height={200}
                className="w-40 h-auto"
                alt="logo"
              />
            </Link>
            <Menu
              className="border-b-0! font-bold xs:hidden! xl:block!"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </div>
          <div className="flex items-center gap-2">
            <Popover
              placement="bottomRight"
              title="Tài khoản"
              content={
                <div className="flex flex-col gap-2">
                  {isAuthenticated ? (
                    <>
                      <Link
                        href={"/admin/v1/dashboard"}
                        className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
                      >
                        <User width={16} height={16} />
                        <div>Trang quản trị</div>
                      </Link>
                      <Link
                        href={"/profile/my-profile"}
                        className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
                      >
                        <User width={16} height={16} />
                        <div>Thông tin cá nhân</div>
                      </Link>
                      <Link
                        href={"/profile/my-profile"}
                        className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
                      >
                        <User width={16} height={16} />
                        <div>Đổi mật khẩu</div>
                      </Link>
                      <Link
                        href={"/profile/my-profile"}
                        className="flex items-center gap-2 py-2 px-3 rounded-sm w-full text-foreground! hover:bg-blue-100!"
                      >
                        <User width={16} height={16} />
                        <div>Đơn hàng đã mua</div>
                      </Link>
                      <button
                        onClick={logout}
                        className="cursor-pointer flex items-center gap-2 py-2 px-3 rounded-sm text-foreground! hover:bg-blue-100!"
                      >
                        <UserRoundPlus width={16} height={16} />
                        <div>Đăng xuất</div>
                      </button>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              }
            >
              <div className="flex gap-2 items-center">
                <div className="cursor-pointer p-2 flex gap-1 items-center">
                  {isAuthenticated && (
                    <div className="flex flex-col items-end">
                      <div className="text-blue-600 text-[9px]">Khách hàng</div>
                      <div className="font-bold text-sm leading-3.5">Admin</div>
                    </div>
                  )}
                  <User width={28} height={28} className="text-slate-800" />
                </div>
              </div>
            </Popover>
            <div className="p-2 rounded-sm border border-slate-300 xs:block xl:hidden">
              <MenuIcon
                width={20}
                height={20}
                className="text-slate-500"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
        <Drawer
          title="Menu"
          closable={{ "aria-label": "Close Button" }}
          onClose={() => setOpen(false)}
          open={open}
        >
          {items.map((item: any) =>
            item.key !== "/categories" ? (
              <Link className="block py-2 text-slate-800!" href={item.key}>
                {item.label}
              </Link>
            ) : (
              <div>
                {services.map((service) => (
                  <Link
                    className="block py-2 text-slate-800!"
                    href={service.path}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )
          )}
        </Drawer>
      </div>
    </header>
  );
}
