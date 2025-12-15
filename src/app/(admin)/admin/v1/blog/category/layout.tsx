import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tất cả danh mục bài viết",
  description: "Blog - Tất cả danh mục bài viết",
};

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
