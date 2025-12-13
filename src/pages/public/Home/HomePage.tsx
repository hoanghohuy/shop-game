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
    <main className="pt-3 bg-[url('/website-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1200px] mx-auto xs:px-3 xl:px-0">
        <div className="px-3 bg-[#3498db] rounded-sm">
          <Marquee speed={100} className="text-white py-2 text-sm">
            <h1>
              Nơi chia sẻ kiến thức về lập trình, công nghệ và phát triển bản
              thân. Hãy theo dõi chúng tôi để cập nhật những bài viết mới nhất!
            </h1>
          </Marquee>
        </div>
      </div>

      <HomeModal />
      <div>
        <div className="py-3 max-w-[1200px] flex xl:flex xl:flex-row gap-4 mx-auto items-center xs:px-3 xs:flex-col-reverse xl:px-0 xs:flex xs:gap-4">
          <div className="xl:w-[30%] xs:w-full">
            <ChargeMoney />
          </div>
          <div className="xl:w-[70%] xs:w-full">
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
