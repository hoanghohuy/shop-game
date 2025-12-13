import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quên mật khẩu",
  description: "Quên mật khẩu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
