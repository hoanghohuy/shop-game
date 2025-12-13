import Footer from "@/layouts/public/Footer";
import Header from "@/layouts/public/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="max-w-[400px] mx-auto min-h-screen text-center">
        <h2 className="font-bold text-3xl mt-10">Đường dẫn không tồn tại!</h2>
        <Link href="/">Quay về trang chủ</Link>
      </div>

      <Footer />
    </>
  );
}
