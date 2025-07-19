'use client';

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ToyBrick, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/ui/breadcrumb";


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  detail1?: string;
  detail2?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Rainbow Express Wooden Train",
      price: 4800,
      quantity: 1,
      image: "/favicon.ico",
      detail1: "Wood",
      detail2: "Designed for Ages 3+ "
    },
    {
      id: 2,
      name: "Galactic Robot Builder Kit",
      price: 7500,
      quantity: 1,
      image: "/favicon.ico",
      detail1: "Plastic",
      detail2: "8+ Years"
    },
    {
      id: 3,
      name: "Sparkle Star Unicorn Plush",
      price: 3200,
      quantity: 2,
      image: "/favicon.ico",
      detail1: "Soft Fabric",
      detail2: "All Ages"
    }
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const { subtotal, shipping, tax, total } = useMemo(() => {
    const calculatedSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const calculatedShipping = cartItems.length > 0 ? 200 : 0;
    const calculatedTax = Math.round(calculatedSubtotal * 0.005);
    const calculatedTotal = calculatedSubtotal + calculatedShipping + calculatedTax;
    return {
      subtotal: calculatedSubtotal,
      shipping: calculatedShipping,
      tax: calculatedTax,
      total: calculatedTotal
    };
  }, [cartItems]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
     
      <main className="container mx-auto px-4 py-8">
     

        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors mb-4 font-medium" style={{ fontFamily: "'Fredoka One'" }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue  Shopping
          </Link>
          <h1
            className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2 drop-shadow-lg"
            style={{ fontFamily: "'Fredoka One'" }}
          >
            Your  Cart
          </h1>
          <p className="text-gray-700 text-lg">
            You have {cartItems.length} {cartItems.length === 1 ? ' item' : ' items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-16 rounded-2xl shadow-xl border-2 border-pink-100 bg-white">
            <CardContent>
              <ShoppingBag className="h-16 w-16 mx-auto text-purple-500 mb-4 animate-bounce-slow" />
              <h2
                className="text-3xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Fredoka One'" }}
              >
                Your  Cart is Empty
              </h2>
              <p className="text-gray-700 mb-6">Looks like you haven't added any  items to your cart yet.</p>
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "'Fredoka One'" }}
              ><Link to="/toys">Explore</Link></Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden rounded-2xl shadow-lg border-2 border-blue-100 bg-white">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex-shrink-0 overflow-hidden shadow-inner">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/128x128?text=Toy+Item'; }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3
                              className="font-bold text-xl text-gray-900"
                              style={{ fontFamily: "'Fredoka One'" }}
                            >
                              {item.name}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.detail1 && <Badge className="bg-purple-200 text-purple-800 font-medium px-3 py-1 rounded-full text-sm">{item.detail1}</Badge>}
                              {item.detail2 && <Badge className="bg-pink-200 text-pink-800 font-medium px-3 py-1 rounded-full text-sm">{item.detail2}</Badge>}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:bg-red-50 hover:text-red-600 rounded-full transition-colors"
                            onClick={() => handleRemoveItem(item.id)}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border-2 border-purple-200 rounded-full overflow-hidden shadow-sm">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 text-purple-600 hover:bg-purple-100 rounded-full"
                              onClick={() => handleQuantityChange(item.id, -1)}
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-4 py-1 font-bold text-lg text-gray-800 min-w-[3rem] text-center" style={{ fontFamily: "'Fredoka One'" }}>{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 text-purple-600 hover:bg-purple-100 rounded-full"
                              onClick={() => handleQuantityChange(item.id, 1)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p
                              className="font-black text-2xl text-black"
                              style={{ fontFamily: "'Fredoka One'" }}
                            >
                              KSh {(item.price * item.quantity).toLocaleString()}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-sm text-gray-500">KSh {item.price.toLocaleString()} each</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-24 rounded-2xl shadow-xl border-2 border-orange-100 bg-white">
                <CardHeader>
                  <CardTitle
                    className="text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "'Fredoka One'" }}
                  >
                    Cart Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-lg text-gray-700">
                    <span>Toy Value</span>
                    <span>KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg text-gray-700">
                    <span>Delivery Charge</span>
                    <span>KSh {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg text-gray-700">
                    <span>Tax (0.5%)</span>
                    <span>KSh {tax.toLocaleString()}</span>
                  </div>
                  <Separator className="bg-pink-200" />
                  <div className="flex justify-between font-black text-2xl text-purple-700" style={{ fontFamily: "'Fredoka One'" }}>
                    <span>Grand Total</span>
                    <span>KSh {total.toLocaleString()}</span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                    size="lg"
                    style={{ fontFamily: "'Fredoka One'" }}
                  ><Link to="/checkout">Proceed to Checkout!</Link></Button>
                  <p className="text-xs text-center text-gray-500">
                    Final charges calculated at the magic checkout counter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;