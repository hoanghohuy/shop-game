import Footer from "@/layouts/public/Footer";
import Header from "@/layouts/public/Header";
import HomePage from "@/pages/public/Home/HomePage";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
