import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tất cả bài viết",
  description: "Blog - Tất cả bài viết",
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
