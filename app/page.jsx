import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";

import "../public/assets/css/style.css";

export const metadata = {
  title: "Cynthia's E-Porfolio"
  description:
    "showcasing my skills and experience as a full-stack developer",
};
export default function page() {
  return (
    <>
      <Hero />
      <Demo />
      <Features />
      <Buy />
      <CopyRight />
    </>
  );
}
