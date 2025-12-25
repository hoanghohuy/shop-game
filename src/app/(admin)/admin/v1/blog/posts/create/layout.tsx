import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tạo bài viết",
  description: "Blog - Tạo bài viết",
};

export default function PostCreateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
