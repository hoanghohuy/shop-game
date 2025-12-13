import Footer from "@/layouts/public/Footer";
import Header from "@/layouts/public/Header";
import { antdThemeConfig } from "@/lib/antdTheme";
import { ConfigProvider } from "antd";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <Header />
      {children}
      <Footer />
    </ConfigProvider>
  );
}
