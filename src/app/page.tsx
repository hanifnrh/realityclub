
import { Discography } from "@/components/section/discography";
import { Featured } from "@/components/section/featured";
import HeroSection from "@/components/section/hero";
import { Releases } from "@/components/section/releases";
import { Schedule } from "@/components/section/schedule";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="w-full max-w-screen-2xl relative flex flex-col items-center">
      <HeroSection />
      <Featured />
      <Releases />
      <Discography />
      <Schedule />
      <Footer />
    </div>
  );
}
