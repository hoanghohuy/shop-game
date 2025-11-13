import HomeModal from "@/components/Modal/HomeModal";
import Slider from "@/components/Slider";
import { FloatButton } from "antd";
import { Send } from "lucide-react";
import React from "react";
import ChargeMoney from "./ChargeMoney";

export default function HomePage() {
  return (
    <main className="bg-amber-300">
      <HomeModal />
      <div>
        <div className="py-4 max-w-[1200px] flex gap-4 mx-auto items-stretch">
          <div className="w-[30%]">
            <ChargeMoney />
          </div>

          <div className="w-[70%]">
            <Slider />
          </div>
        </div>
      </div>
      <FloatButton
        className="w-12 h-12"
        icon={<Send width={18} height={18} />}
        type="primary"
        style={{ insetInlineEnd: 24 }}
      />
    </main>
  );
}
