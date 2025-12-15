import { Breadcrumb } from "antd";
import React from "react";

export default function page() {
  return (
    <div>
      <Breadcrumb
        items={[{ title: "Admin" }, { title: "Blog" }, { title: "Danh mục" }]}
      />
    </div>
  );
}
