import {
  Sparkles,
  ToyBrick,
  Car,
  Heart,
  Puzzle,
  Drumstick,
  Crown,
  Palette,
  Blocks,
  Feather,
  Gem
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/ui/breadcrumb";


const Categories = () => {
  const categories = [
    {
      name: "Plush Pals",
      icon: Heart,
      count: 75,
      image: "/favicon.ico",
      description: "Cuddly companions for endless hugs and adventures"
    },
    {
      name: "Building Worlds",
      icon: ToyBrick,
      count: 62,
      image: "/favicon.ico",
      description: "Construct amazing creations, brick by brick!"
    },
    {
      name: "Wheels & Wings",
      icon: Car,
      count: 48,
      image: "/favicon.ico",
      description: "Zoom into action with cool cars, planes, and more"
    },
    {
      name: "Magical Dolls & Playsets",
      icon: Crown,
      count: 56,
      image: "/favicon.ico",
      description: "Enchanting dolls and imaginative worlds to explore"
    },
    {
      name: "Brainy Adventures",
      icon: Puzzle,
      count: 34,
      image: "/favicon.ico",
      description: "Puzzles, science kits, and learning fun for curious minds"
    },
    {
      name: "Tune Town",
      icon: Drumstick,
      count: 28,
      image: "/favicon.ico",
      description: "Create joyful melodies with our musical instruments"
    },
    {
      name: "Super Heroes",
      icon: Sparkles,
      count: 42,
      image: "/favicon.ico",
      description: "Unleash your inner hero with epic action figures"
    },
    {
      name: "Art & Creativity",
      icon: Palette,
      count: 39,
      image: "/favicon.ico",
      description: "Unleash imagination with painting, drawing, and crafting kits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
     
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />

        <div className="mb-10 text-center">
          <h1
            className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4 drop-shadow-lg"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Explore Our Toy Worlds!
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Find the perfect playtime adventure by Browse our magical toy categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const categorySlug = category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[^\w-]/g, '');

            return (
              <Link key={category.name} to={`/toys?category=${categorySlug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden border-2 border-transparent hover:border-pink-300 bg-white">
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-yellow-100 to-orange-100">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Toy+Category';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                        <IconComponent className="h-16 w-16 text-white opacity-90 transition-transform duration-300 group-hover:scale-125 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3
                          className="font-bold text-2xl text-gray-900 group-hover:text-purple-700 transition-colors"
                          style={{ fontFamily: "'Fredoka One', cursive" }}
                        >
                          {category.name}
                        </h3>
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-4 py-2 rounded-full text-md shadow-md">
                          {category.count} items
                        </Badge>
                      </div>
                      <p className="text-md text-gray-700 leading-relaxed">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-20">
          <h2
            className="text-4xl font-bold text-gray-900 mb-10 text-center drop-shadow-md"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Our Special Toy Collections!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Link to="/products?collection=outdoor-adventure">
                <div className="aspect-video relative group">
                  <img
                    src="/KrystalLogo.png"
                    alt="Kids playing outdoors with toys"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Outdoor+Fun'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-800/80 to-transparent flex flex-col justify-end p-8 text-white transition-opacity duration-300 group-hover:bg-purple-800/60">
                    <h3
                      className="text-3xl font-black mb-2 drop-shadow-lg"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      Outdoor Play!
                    </h3>
                    <p className="text-lg opacity-90 leading-snug">
                      Adventure awaits with our durable outdoor toys for endless fun in the sun!
                    </p>
                  </div>
                </div>
              </Link>
            </Card>

            <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Link to="/products?collection=eco-friendly-toys">
                <div className="aspect-video relative group">
                  <img
                    src="KrystalLogo.png"
                    alt="Wooden eco-friendly toys"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Eco+Friendly'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 to-transparent flex flex-col justify-end p-8 text-white transition-opacity duration-300 group-hover:bg-green-800/60">
                    <h3
                      className="text-3xl font-black mb-2 drop-shadow-lg"
                      style={{ fontFamily: "'Fredoka One', cursive" }}
                    >
                      Eco-Friendly Fun!
                    </h3>
                    <p className="text-lg opacity-90 leading-snug">
                      Sustainable and safe toys for a brighter planet and happier playtimes.
                    </p>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;