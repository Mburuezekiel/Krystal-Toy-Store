
import { Smartphone, Laptop, Tablet, Headphones, Camera, Watch, Gamepad2, Tv } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Smartphones",
      icon: Smartphone,
      count: 45,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80",
      description: "Latest smartphones from top brands"
    },
    {
      name: "Laptops",
      icon: Laptop,
      count: 32,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
      description: "High-performance laptops for work and gaming"
    },
    {
      name: "Tablets",
      icon: Tablet,
      count: 28,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80",
      description: "Portable tablets for entertainment and productivity"
    },
    {
      name: "Audio",
      icon: Headphones,
      count: 56,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80",
      description: "Premium headphones and speakers"
    },
    {
      name: "Cameras",
      icon: Camera,
      count: 24,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
      description: "Professional and consumer cameras"
    },
    {
      name: "Wearables",
      icon: Watch,
      count: 38,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      description: "Smart watches and fitness trackers"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: 42,
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=400&q=80",
      description: "Gaming consoles and accessories"
    },
    {
      name: "TVs & Displays",
      icon: Tv,
      count: 19,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
      description: "Smart TVs and computer monitors"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
          <p className="text-muted-foreground">Browse our electronics by category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.name} to={`/products?category=${category.name.toLowerCase()}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <Badge variant="secondary">
                          {category.count} items
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Featured Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                  alt="Gaming Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Gaming Essentials</h3>
                    <p className="text-sm opacity-90">Complete your gaming setup with our curated collection</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                  alt="Work from Home"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Work From Home</h3>
                    <p className="text-sm opacity-90">Professional equipment for your home office</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
