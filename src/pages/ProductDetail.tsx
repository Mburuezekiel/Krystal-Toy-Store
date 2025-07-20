'use client';

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
  Sparkles,
  Gift,
  Castle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: parseInt(id || "1"),
    name: "Rainbow Unicorn Plush Toy",
    price: 3500,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 589,
    category: "Plush Toys",
    brand: "DreamWeavers",
    inStock: true,
    stockCount: 25,
    images: [
      "/favicon.ico",
       "/favicon.ico",
        "/favicon.ico",
         "/favicon.ico",
    
    ],
    description: "Our Rainbow Unicorn Plush Toy is crafted with the softest, most vibrant materials, offering comfort and inspiring imaginative play. Its sparkling horn and colorful mane make it a perfect companion for children of all ages.",
    features: [
      "Super soft, hypoallergenic fabric",
      "Vibrant rainbow mane and tail",
      "Sparkling horn accent",
      "Ideal for cuddles and imaginative play",
      "Durable and machine washable",
      "Suitable for all ages 0+"
    ],
    specifications: {
      "Material": "Premium Polyester Plush",
      "Height": "50 cm (approx. 20 inches)",
      "Weight": "450g",
      "Color": "White with Rainbow accents",
      "Care Instructions": "Machine wash cold, tumble dry low",
      "Recommended Age": "0+ years"
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + change)));
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Galactic Robot Building Kit",
      price: 7800,
      image: "https://images.unsplash.com/photo-1627063065662-e60d13c7a99f?auto=format&fit=crop&w=400&q=80",
      rating: 4.7
    },
    {
      id: 3,
      name: "Princess Play Castle Set",
      price: 5200,
      image: "https://images.unsplash.com/photo-1577789725514-411475583b4b?auto=format&fit=crop&w=400&q=80",
      rating: 4.6
    },
    {
      id: 4,
      name: "Adventure Race Car Track Set",
      price: 4100,
      image: "https://images.unsplash.com/photo-1555584285-b1539a2f6027?auto=format&fit=crop&w=400&q=80",
      rating: 4.5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Link to="/products" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-medium transition-colors" style={{ fontFamily: "'Fredoka One', cursive" }}>
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl border-4 border-pink-200 bg-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 ${selectedImage === index ? "border-purple-500 ring-4 ring-purple-300 shadow-md" : "border-gray-200 hover:border-purple-300"
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 bg-yellow-300 text-purple-800 text-sm px-3 py-1 rounded-full font-semibold">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2 drop-shadow-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg font-medium">{product.brand}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="font-bold text-xl text-yellow-600">{product.rating}</span>
              </div>
              <span className="text-gray-500 text-lg">({product.reviews} Reviews)</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold " style={{ fontFamily: "'Fredoka One', cursive" }}>
                  KSh {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-400 line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <Badge className="bg-red-500 text-white text-md px-3 py-1 rounded-full animate-pulse">
                  Save KSh {(product.originalPrice - product.price).toLocaleString()}!
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2 font-semibold text-lg">
              {product.inStock ? (
                <>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700">In Stock ({product.stockCount} available)</span>
                </>
              ) : (
                <>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-lg text-gray-700">Quantity:</span>
                <div className="flex items-center border-2 border-purple-300 rounded-full overflow-hidden shadow-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 text-purple-600 hover:bg-purple-100"
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  <span className="px-6 py-2 text-xl font-bold text-gray-800" style={{ fontFamily: "'Fredoka One', cursive" }}>{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                    className="h-10 w-10 text-purple-600 hover:bg-purple-100"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-pink-600"
                  size="lg"
                  disabled={!product.inStock}
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  <ShoppingCart className="h-6 w-6 mr-3" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="rounded-full shadow-md text-red-500 hover:bg-red-50 hover:text-red-600">
                  <Heart className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full shadow-md text-blue-500 hover:bg-blue-50 hover:text-blue-600">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-purple-200">
              <h3 className="font-bold text-xl text-gray-800" style={{ fontFamily: "'Fredoka One', cursive" }}>Key Features:</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse-slow" />
                    <span className="text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-blue-200">
              <div className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-blue-500" />
                <span className="text-md font-medium text-gray-700">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="text-md font-medium text-gray-700">1-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-6 w-6 text-orange-500" />
                <span className="text-md font-medium text-gray-700">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 bg-purple-100 rounded-xl shadow-inner p-1">
            <TabsTrigger value="description" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-bold rounded-lg text-lg px-6 py-3 transition-colors duration-200" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Description
            </TabsTrigger>
            <TabsTrigger value="specifications" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-bold rounded-lg text-lg px-6 py-3 transition-colors duration-200" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:font-bold rounded-lg text-lg px-6 py-3 transition-colors duration-200" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="rounded-xl shadow-lg border-2 border-pink-100 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card className="rounded-xl shadow-lg border-2 border-blue-100 bg-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-semibold text-gray-800">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="rounded-xl shadow-lg border-2 border-yellow-100 bg-white">
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <p className="text-gray-600 text-lg">No reviews yet. Be the first to review this product!</p>
                  <Button variant="outline" className="mt-4 bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-300 rounded-full">
                    Write a Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div>
          <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-6 drop-shadow-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`}>
                <Card className="group rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-purple-100 bg-white">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-purple-50">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-800" style={{ fontFamily: "'Fredoka One', cursive" }}>{relatedProduct.name}</h3>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({relatedProduct.rating})
                        </span>
                      </div>
                      <span className="text-xl font-bold text-green-600">
                        KSh {relatedProduct.price.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default ProductDetail;