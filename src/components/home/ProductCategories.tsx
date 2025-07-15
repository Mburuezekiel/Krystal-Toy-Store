
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from "lucide-react";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: "150+ Products",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Laptops",
    icon: Laptop,
    count: "80+ Products",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Audio",
    icon: Headphones,
    count: "120+ Products",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Wearables",
    icon: Watch,
    count: "60+ Products",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Cameras",
    icon: Camera,
    count: "45+ Products",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    count: "90+ Products",
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=400&q=80"
  }
];

export function ProductCategories() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find exactly what you're looking for in our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-24 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
