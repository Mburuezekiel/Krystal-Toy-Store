import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Login from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";  
import ForgotPassword from "./components/auth/ForgotPassword";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { LoginCredentials, RegisterData } from "./types";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/auth/login" element={<MainLayout><Login onSubmit={function (credentials: LoginCredentials): void {
            throw new Error("Function not implemented.");
          } } /></MainLayout>} />
          <Route path="/auth/register" element={<MainLayout><RegisterForm onSubmit={function (data: RegisterData): void {
            throw new Error("Function not implemented.");
          } } /></MainLayout>} />
          <Route path="/auth/forgot-password" element={<MainLayout><ForgotPassword /></MainLayout>} />
          <Route path="/toys" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/products/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
          <Route path="/categories" element={<MainLayout><Categories /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
          <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;