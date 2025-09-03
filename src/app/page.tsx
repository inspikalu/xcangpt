import Navbar from "@/components/app/navbar";
import Hero from "@/components/app/hero";
import TrustedBy from "@/components/app/trusted-by";
import WhatIs from "@/components/app/what-is";
import FeaturesBenefit from "@/components/app/features-benefits";
import XcanGptOcrWorks from "@/components/app/xcangpt-ocr-works";
import CustomerScenarios from "@/components/app/customer-scenarios";
import Footer from "@/components/app/footer";

export default function HOme() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhatIs />
      <FeaturesBenefit />
      <XcanGptOcrWorks />
      <CustomerScenarios />
      <Footer />
    </>
  );
}
