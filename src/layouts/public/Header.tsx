import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="max-w-[1200px] mx-auto flex justify-between">
      <div className="text-sm text-slate-700 py-2 flex w-full justify-between">
        <div className="flex gap-2">
          <div>Tạp hoá MMO</div>
          <div>0394.210.763</div>
          <div>8:00 - 22:00</div>
        </div>
        <Link href={"/login"}>Đăng ký CTV</Link>
      </div>
    </header>
  );
}
