"use client";
import { Modal } from "antd";
import React, { useState } from "react";

export default function HomeModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onHide = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Thông báo"
      okText="Tắt trong 1 giờ"
      cancelText="Đóng"
      open={isModalOpen}
      onOk={onHide}
      onCancel={onHide}
    >
      Vui lòng liên hệ ngay đội ngũ Admin để được hỗ trợ kịp thời (8h-22h).
    </Modal>
  );
}
