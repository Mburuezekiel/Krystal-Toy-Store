'use client';

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreditCard, Truck, Shield, ArrowLeft, Loader2, PartyPopper } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  detail1?: string;
  detail2?: string;
}

const checkoutFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, { message: "Invalid phone number format." }).optional().or(z.literal('')),
  address: z.string().min(1, { message: "Street address is required." }),
  city: z.string().min(1, { message: "City is required." }),
  state: z.string().min(1, { message: "State/Region is required." }),
  zipCode: z.string().min(1, { message: "ZIP Code is required." }),
  country: z.string().min(1, { message: "Country is required." }),
  sameAsBilling: z.boolean().default(false).optional(),
  paymentMethod: z.enum(["card", "mpesa"], { required_error: "Please select a payment method." }),
  cardNumber: z.string().optional(),
  expiry: z.string().optional(),
  cvv: z.string().optional(),
  cardName: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

const Checkout = () => {
  const navigate = useNavigate();

  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Sparkle Star Unicorn Plush",
      price: 3200,
      quantity: 1,
      image: "/favicon.ico",
      detail1: "Soft Fabric",
      detail2: "All Ages"
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
      name: "Miniature Tea Set & Dolls",
      price: 2500,
      quantity: 2,
      image: "/favicon.ico",
      detail1: "Ceramic",
      detail2: "4+ Years"
    }
  ]);

  const [activePaymentMethod, setActivePaymentMethod] = useState<'card' | 'mpesa'>('card');
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

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

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      sameAsBilling: false,
      paymentMethod: 'card',
      cardNumber: "",
      expiry: "",
      cvv: "",
      cardName: "",
    }
  });

  const onSubmit = async (values: CheckoutFormValues) => {
    setIsProcessingOrder(true);
    console.log("Submitting order with values:", values);

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log("Order processed successfully!");
    setIsProcessingOrder(false);
    setOrderComplete(true);

    setTimeout(() => {
      navigate('/profile/orders');
    }, 60000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <Card className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl space-y-6 border-2 border-green-300">
          <CardHeader>
            <PartyPopper className="h-20 w-20 mx-auto text-green-500 animate-bounce-in" />
            <CardTitle className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Fredoka One', cursive" }}>
              Order Placed!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-700">Your   order has been successfully placed!</p>
            <p className="text-md text-gray-600">A confirmation email with your order details is on its way.</p>
            <Button asChild className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105" style={{ fontFamily: "'Fredoka One', cursive" }}>
              <Link to="/toys">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full font-bold" style={{ fontFamily: "'Fredoka One', cursive" }}>
              <Link to="profile/orders">View My Orders</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors mb-4 font-medium" style={{ fontFamily: "'Fredoka One', cursive" }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Your  Cart
          </Link>
          <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2 drop-shadow-lg" style={{ fontFamily: "'Fredoka One', cursive" }}>
             Checkout
          </h1>
          <p className="text-gray-700 text-lg">
            Complete your purchase securely and get ready for playtime
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <span className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Fredoka One', cursive" }}>Billing details</span>
              
              <Card className="rounded-2xl shadow-lg border-2 border-orange-100 bg-white">
                
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
                    Your  Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+254 7XX XXX XXX" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg border-2 border-blue-100 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
                     Delivery Spot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Playtime Lane" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Nairobi" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>County / Region</FormLabel>
                          <FormControl>
                            <Input placeholder="Muranga County" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="00100" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Kenya" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="sameAsBilling"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="sameAsBilling"
                            className="border-purple-400 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white"
                          />
                        </FormControl>
                        <FormLabel htmlFor="sameAsBilling" className="text-sm cursor-pointer">
                          Billing address is the same as delivery spot
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg border-2 border-yellow-100 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-900" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
                     Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <Button
                              type="button"
                              variant={field.value === 'mpesa' ? 'default' : 'outline'}
                              className={`h-16 flex flex-col gap-1 rounded-lg border-2 transition-all ${field.value === 'mpesa' ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white border-green-500 shadow-md' : 'border-gray-300 hover:border-green-300 text-gray-700'}`}
                              onClick={() => {
                                field.onChange('mpesa');
                                setActivePaymentMethod('mpesa');
                              }}
                            >
                              <div className="text-2xl font-black">M</div>
                              <span className="text-sm font-semibold">M-PESA</span>
                            </Button>
                            <Button
                              type="button"
                              variant={field.value === 'card' ? 'default' : 'outline'}
                              className={`h-16 flex flex-col gap-1 rounded-lg border-2 transition-all ${field.value === 'card' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500 shadow-md' : 'border-gray-300 hover:border-purple-300 text-gray-700'}`}
                              onClick={() => {
                                field.onChange('card');
                                setActivePaymentMethod('card');
                              }}
                            >
                              <CreditCard className="h-6 w-6" />
                              <span className="text-sm font-semibold">Credit/Debit Card</span>
                            </Button>
                           
                          </div>
                        </FormControl>
                        <FormMessage className="text-center" />
                      </FormItem>
                    )}
                  />

                  {activePaymentMethod === 'card' && (
                    <div className="space-y-4 p-4 border-2 border-purple-100 rounded-lg bg-purple-50/50 shadow-inner">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="1234 5678 9012 3456" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <Input placeholder="MM/YY" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input placeholder="123" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="border-2 border-pink-200 rounded-lg focus:border-purple-500" style={{ fontFamily: "'Fredoka One', cursive" }} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {activePaymentMethod === 'mpesa' && (
                    <div className="space-y-4 p-4 border-2 border-green-100 rounded-lg bg-green-50/50 shadow-inner">
                      <p className="text-gray-700 text-sm">
                        You will be prompted to enter your M-PESA PIN on your phone to complete the payment.
                      </p>
                      <Label htmlFor="mpesaNumber" className="font-semibold text-gray-800">M-PESA Phone Number</Label>
                      <Input
                        id="mpesaNumber"
                        placeholder="e.g., 0712345678"
                        className="border-2 border-green-200 rounded-lg focus:border-green-500"
                        style={{ fontFamily: "'Fredoka One', cursive" }}
                      />
                      <p className="text-xs text-gray-500">Ensure this is the number registered with your M-PESA account.</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4 text-purple-500" />
                    <span>Your payment information is enchanted and secured.</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24 rounded-2xl shadow-xl border-2 border-pink-100 bg-white">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Fredoka One', cursive" }}>
                    Your Playtime Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg overflow-hidden flex-shrink-0 shadow-inner">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-base text-gray-900 truncate" style={{ fontFamily: "'Fredoka One', cursive" }}>{item.name}</h4>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Qty: {item.quantity}</span>
                            <span className="font-semibold text-purple-600">KSh {(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="bg-purple-200" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-base text-gray-700">
                      <span>Toy Value</span>
                      <span>KSh {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-base text-gray-700">
                      <span className="flex items-center gap-1">
                        <Truck className="h-4 w-4 text-blue-500" />
                        Delivery Charge
                      </span>
                      <span>KSh {shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-base text-gray-700">
                      <span>Tax (0.5%)</span>
                      <span>KSh {tax.toLocaleString()}</span>
                    </div>
                    <Separator className="bg-purple-200" />
                    <div className="flex justify-between font-black text-2xl " style={{ fontFamily: "'Fredoka One', cursive" }}>
                      <span>Grand Total</span>
                      <span>KSh {total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-blue-600 text-white font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105"
                    size="lg"
                    disabled={isProcessingOrder}
                    style={{ fontFamily: "'Fredoka One', cursive" }}
                  >
                    {isProcessingOrder ? (
                      <span className="flex items-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Payment Processing...
                      </span>
                    ) : (
                      'Pay Now'
                      
                    )}

                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Shield className="h-3 w-3 text-green-500" />
                    <span>Your checkout is protected by a shield of enchantment.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default Checkout;