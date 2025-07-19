
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductCategories } from "@/components/home/ProductCategories";



const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
     
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
      
     
    </div>
  );
};

export default Index;
