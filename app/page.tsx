import StickyBanner from "@/components/StickyBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCarouselSection from "@/components/FeatureCarouselSection";
import ClinicalWorkbenchSection from "@/components/ClinicalWorkbenchSection";
import LogoTicker from "@/components/LogoTicker";
import PipelineSection from "@/components/PipelineSection";
import ComparisonTable from "@/components/ComparisonTable";
import ValidationSection from "@/components/ValidationSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <StickyBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureCarouselSection />
        <ClinicalWorkbenchSection />
        <LogoTicker />
        <PipelineSection />
        <ComparisonTable />
        <ValidationSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
