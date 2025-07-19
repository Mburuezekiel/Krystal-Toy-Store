import { Card, CardContent } from "@/components/ui/card";
import {
  Baby,
  Blocks,
  Puzzle,
  Car,
  Brush,
  Dices,
  BookOpen,
  Feather,
  Bot,
  School,
  Swords,
  Palette,
  Music,
  Cloud
} from 'lucide-react';


const categories = [
  { name: 'Baby & Toddler', icon: Baby, link: '/toys?category=baby-toddler', color: 'bg-indigo-400' },
  { name: 'Building Blocks', icon: Blocks, link: '/toys?category=building-blocks', color: 'bg-yellow-500' },
  { name: 'Puzzles & Brain Teasers', icon: Puzzle, link: '/toys?category=puzzles', color: 'bg-purple-500' },
  { name: 'Vehicles & RC', icon: Car, link: '/toys?category=vehicles-rc', color: 'bg-red-500' },
  { name: 'Arts & Crafts', icon: Brush, link: '/toys?category=arts-crafts', color: 'bg-green-500' },
  { name: 'Board Games', icon: Dices, link: '/toys?category=board-games', color: 'bg-pink-500' },
  { name: 'Children\'s Books', icon: BookOpen, link: '/toys?category=childrens-books', color: 'bg-blue-600' },
  { name: 'Plush & Stuffed Animals', icon: Feather, link: '/toys?category=plush-animals', color: 'bg-orange-400' },
  { name: 'Action Figures', icon: Bot, link: '/toys?category=action-figures', color: 'bg-teal-500' },
  { name: 'Educational Toys', icon: School, link: '/toys?category=educational', color: 'bg-lime-500' },
  { name: 'Outdoor Play', icon: Swords, link: '/toys?category=outdoor-play', color: 'bg-emerald-500' },
  { name: 'Creative Play', icon: Palette, link: '/toys?category=creative-play', color: 'bg-rose-500' },
  { name: 'Musical Instruments', icon: Music, link: '/toys?category=musical-toys', color: 'bg-cyan-500' },
  { name: 'Dolls & Playsets', icon: Cloud, link: '/toys?category=dolls-playsets', color: 'bg-violet-400' },
];

export function ProductCategories() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-gray-900 text-center mb-12 drop-shadow-md"
          style={{ fontFamily: "'Fredoka One'" }}
        >
          Explore Toy Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.name}
                href={category.link}
                className="group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:-translate-y-1 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md group-hover:shadow-lg`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3
                  className="font-bold text-lg text-gray-800 group-hover:text-purple-600 transition-colors"
                  style={{ fontFamily: "'Fredoka One'" }}
                >
                  {category.name}
                </h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}