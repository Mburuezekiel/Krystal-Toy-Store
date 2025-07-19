'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Heart, Sparkles } from "lucide-react";
import car from '../../assets/Products/car.png';
import Doll from '../../assets/Products/Doll.png';
import Lego from '../../assets/Products/Lego.jpg';
import toys from '../../assets/Products/toys.png';


interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  link: string;
  bgColor: string;
  accentColor: string;
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Unleash the Fun!",
      subtitle: "Discover a world of imagination and play",
      image: Doll,
      cta: "Shop All Toys",
      link: "/products",
      bgColor: "from-pink-400 via-purple-500 to-indigo-600",
      accentColor: "text-yellow-300"
    },
    {
      id: 2,
      title: "Adventures Await!",
      subtitle: "Creating Happy Childhood Memories",
      image: car,
      cta: "Explore Collections",
      link: "/products?category=action-figures",
      bgColor: "from-orange-400 via-red-500 to-pink-600",
      accentColor: "text-blue-200"
    },
    {
      id: 3,
      title: "Cuddly Friends & More!",
      subtitle: "Softness, joy, and endless hugs for your little ones",
      image: toys,
      cta: "Snuggle Up",
      link: "/products?category=stuffed-animals",
      bgColor: "from-green-400 via-blue-500 to-purple-600",
      accentColor: "text-pink-200"
    },
  ];

  const currentSlideData = heroSlides[currentSlide];

  useEffect(() => {
    setDisplayedTitle('');
    setDisplayedSubtitle('');
    setTitleComplete(false);
    setSubtitleComplete(false);

    const title = currentSlideData.title;
    const subtitle = currentSlideData.subtitle;
    
    let titleIndex = 0;
    let subtitleTimer: NodeJS.Timeout;

    const titleInterval = setInterval(() => {
      if (titleIndex < title.length) {
        setDisplayedTitle(title.substring(0, titleIndex + 1));
        titleIndex++;
      } else {
        setTitleComplete(true);
        clearInterval(titleInterval);
        
        let subtitleIndex = 0;
        subtitleTimer = setTimeout(() => {
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < subtitle.length) {
              setDisplayedSubtitle(subtitle.substring(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              setSubtitleComplete(true);
              clearInterval(subtitleInterval);
            }
          }, 50);
        }, 300);
      }
    }, 80);

    return () => {
      clearInterval(titleInterval);
      if (subtitleTimer) {
        clearTimeout(subtitleTimer);
      }
    };
  }, [currentSlide, currentSlideData.title, currentSlideData.subtitle]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }, 8000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="relative h-[500px] md:h-[700px] overflow-hidden rounded-3xl mx-4 my-6 shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} transition-all duration-1000`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-20 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-300/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          <Sparkles className="absolute top-16 right-16 w-6 h-6 text-yellow-300/40 animate-pulse" style={{animationDelay: '0.3s'}} />
          <Star className="absolute bottom-16 left-16 w-8 h-8 text-pink-300/40 animate-pulse" style={{animationDelay: '1.2s'}} />
          <Heart className="absolute top-1/3 right-1/4 w-5 h-5 text-red-300/40 animate-pulse" style={{animationDelay: '2.1s'}} />
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <div 
          className={`w-full h-full bg-cover bg-center transition-all duration-2000 ease-out ${
            isAnimating ? 'scale-110' : 'scale-105'
          } animate-zoom-in opacity-80`}
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight transition-all duration-700 ${
                isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              }`}
              style={{ 
                fontFamily: "'Fredoka One', 'Comic Sans MS', cursive",
                textShadow: '4px 4px 0px rgba(0,0,0,0.5), 8px 8px 0px rgba(0,0,0,0.3)',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)'
              }}
            >
              {displayedTitle}
              <span className={`animate-pulse ${!titleComplete ? 'inline' : 'hidden'}`}>|</span>
            </h1>
            
            <p 
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 lg:mb-10 transition-all duration-700 ${currentSlideData.accentColor} ${
                isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
              } ${titleComplete ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                fontFamily: "'Fredoka One', 'Comic Sans MS', cursive",
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                animationDelay: '0.2s'
              }}
            >
              {displayedSubtitle}
              <span className={`animate-pulse ${!subtitleComplete && titleComplete ? 'inline' : 'hidden'}`}>|</span>
            </p>
            
            <Button
              size="lg"
              className={`bg-yellow-400 text-purple-900 hover:bg-yellow-300 hover:text-purple-800 font-black rounded-full px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl transform ${
                subtitleComplete ? 'translate-y-0 opacity-100 animate-bounce-in' : 'translate-y-4 opacity-0'
              }`}
              onClick={() => window.location.href = currentSlideData.link}
              style={{ 
                fontFamily: "'Fredoka One', 'Comic Sans MS', cursive",
                boxShadow: '0 6px 0 #b45309, 0 10px 20px rgba(0,0,0,0.4)',
                animationDelay: '0.4s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 0 #b45309, 0 12px 25px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 0 #b45309, 0 10px 20px rgba(0,0,0,0.4)';
              }}
            >
              {currentSlideData.cta}
            </Button>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? 'w-12 h-4 bg-yellow-400 rounded-full shadow-lg' 
                : 'w-4 h-4 bg-white/50 rounded-full hover:bg-white/70'
            }`}
            style={{
              boxShadow: index === currentSlide 
                ? '0 4px 12px rgba(251, 191, 36, 0.6)' 
                : '0 2px 8px rgba(0,0,0,0.3)'
            }}
          />
        ))}
      </div>

      <div className="absolute top-40 left-8 z-30 hidden md:flex items-center space-x-4 animate-float">
        <div className="flex items-center space-x-2">
          <Star className="w-6 h-6 text-yellow-300 animate-spin" style={{animationDuration: '8s'}} />
          <span className="text-white font-bold text-lg backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full" style={{fontFamily: "'Fredoka One', cursive"}}>
            Toys for Every Age!
          </span>
          <Star className="w-6 h-6 text-yellow-300 animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        
        @keyframes zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        
        @keyframes bounce-in {
          0% { 
            transform: translateY(20px) scale(0.9); 
            opacity: 0; 
          }
          50% { 
            transform: translateY(-5px) scale(1.05); 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-zoom-in {
          animation: zoom-in 2s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}