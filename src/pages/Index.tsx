
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductCategories } from "@/components/home/ProductCategories";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
