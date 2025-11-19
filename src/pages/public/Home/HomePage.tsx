import HomeModal from "@/components/Modal/HomeModal";
import Slider from "@/components/Slider";
import { FloatButton } from "antd";
import { Send } from "lucide-react";
import React from "react";
import ChargeMoney from "./ChargeMoney";
import HomeServices from "./HomeServices";
import Marquee from "react-fast-marquee";

export default function HomePage() {
  return (
    <main className="bg-slate-300">
      <Marquee speed={100} className="bg-[#3498db] text-white py-1 text-sm">
        Nick1s.Com - Nơi chia sẻ kiến thức về lập trình, công nghệ và phát triển
        bản thân. Hãy theo dõi chúng tôi để cập nhật những bài viết mới nhất!
      </Marquee>
      <HomeModal />
      <div>
        <div className="py-4 max-w-[1200px] flex gap-4 mx-auto items-center">
          <div className="w-[30%]">
            <ChargeMoney />
          </div>
          <div className="w-[70%]">
            <Slider />
          </div>
        </div>
      </div>
      <HomeServices />
      <FloatButton
        className="w-12 h-12"
        icon={<Send width={18} height={18} />}
        type="primary"
        style={{ insetInlineEnd: 24 }}
      />
    </main>
  );
}
