"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import GallerySection from "@/components/GallerySection";
import SignatureSection from "@/components/SignatureSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import VisitSection from "@/components/VisitSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <GallerySection />
      <SignatureSection />
      <WorkshopsSection />
      <VisitSection />
      <FooterSection />
    </main>
  );
}
