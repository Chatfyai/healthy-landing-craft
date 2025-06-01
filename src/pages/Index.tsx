import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProductCategories from "@/components/ProductCategories";
import BrandsCarousel from "@/components/BrandsCarousel";
import ConvenienceInfo from "@/components/ConvenienceInfo";
import CTASection from "@/components/CTASection";
import LocationMap from "@/components/LocationMap";
import OrderButton from "@/components/OrderButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <ProductCategories />
      <BrandsCarousel />
      <ConvenienceInfo />
      <CTASection />
      <LocationMap />
      <OrderButton />
    </div>
  );
};

export default Index;
