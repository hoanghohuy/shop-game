"use client";
import Footer from "@/layouts/public/Footer";
import Header from "@/layouts/public/Header";
import { antdThemeConfig } from "@/lib/antdTheme";
import HomePage from "@/pages/public/Home/HomePage";
import { Button, ConfigProvider } from "antd";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("/api/v1/upload", formData);
    console.log(res.data);

    setImageUrl(res.data.data.secure_url);
  }
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <Header />
      <HomePage />
      <Footer />
      <input type="file" accept="image/*" onChange={handleUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" width={300} />}
    </ConfigProvider>
  );
}
