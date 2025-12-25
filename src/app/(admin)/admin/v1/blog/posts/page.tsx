"use client";
import { Breadcrumb, Button, Space, Table } from "antd";
import Link from "next/link";
import React from "react";

const dataSource = [
  {
    key: "1",
    title: "Hướng dẫn sử dụng Ant Design",
    category: "Mẹo vặt",
    status: "Đã xuất bản",
  },
  {
    key: "2",
    title: "Hướng dẫn sử dụng Ant Design 2",
    category: "Mẹo vặt",
    status: "Đã xuất bản",
  },
];

const columns = [
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Danh mục",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Action",
    key: "action",
    render: (_: any, record: any) => (
      <Space size="middle">
        <a>Sửa</a>
        <a>Xoá</a>
      </Space>
    ),
  },
];

export default function page() {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: "Admin" },
          { title: "Blog" },
          { title: "Tất cả bài viết" },
        ]}
      />
      <div className="mt-4">
        <Link href="/admin/v1/blog/posts/create">
          <Button className="mb-2" type="primary">
            Tạo bài viết
          </Button>
        </Link>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}
