// src/components/auth/LoginForm.tsx
'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Globe } from 'lucide-react'; // Using Globe for Google icon
import { Button } from '@/components/ui/button';
// Assuming Input is a custom component, otherwise remove or adapt
// import { Input } from '@/components/ui/input';
import { LoginCredentials } from '@/types';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  onGoogleLogin?: () => void;
  loading?: boolean;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onGoogleLogin, loading = false, error }) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {};

    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleGoogleLogin = () => {
    if (onGoogleLogin) {
      onGoogleLogin();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginCredentials]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    // Outer container for centering the form
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl space-y-8"> {/* Adjusted styling for content box */}
        <div className="text-center">
          <h2
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.email ? 'border-red-500' : 'border-pink-200'
                  } transition-colors`}
                placeholder="Enter your email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                style={{ fontFamily: "'Fredoka One', cursive" }}
              />
              <Mail size={20} className="absolute left-3 top-2.5 text-pink-400" />
            </div>
            {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.password ? 'border-red-500' : 'border-pink-200'
                  } transition-colors`}
                placeholder="Enter your password"
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={errors.password ? "password-error" : undefined}
                style={{ fontFamily: "'Fredoka One', cursive" }}
              />
              <Lock size={20} className="absolute left-3 top-2.5 text-pink-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p id="password-error" className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <Link to="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
            className={`w-full py-2.5 text-white font-bold rounded-full px-8 shadow-lg transition-all duration-300 hover:scale-105 ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }`}
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-blue-600 hover:text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;