"use client";
import { Layout, Menu, MenuProps, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const sidebarItems: MenuProps["items"] = [
  {
    key: `/admin/v1/dashboard`,
    label: `Dashboard`,
    children: [{ key: "dashboard-1", label: "Doanh thu" }],
  },
  {
    key: `/admin/v1/account`,
    label: `Thành viên`,
  },
  {
    key: `blog`,
    label: `Blog`,
    children: [
      { key: "/admin/v1/blog/posts", label: "Bài viết" },
      { key: "/admin/v1/blog/category", label: "Thể loại" },
    ],
  },
];

export default function AdminV1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e: any) => {
    if (e.key) {
      router.push(e.key);
    }
  };
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Image
          onClick={() => window.location.assign("/")}
          src={"/logo.gif"}
          width={400}
          height={200}
          className="w-40 h-auto cursor-pointer"
          alt="logo"
        />
      </Header>
      <div className="px-3 mt-3">
        <Layout
          style={{
            padding: "12px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={sidebarItems}
              onClick={onClick}
            />
          </Sider>
          <Content style={{ padding: "12px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Admin ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
