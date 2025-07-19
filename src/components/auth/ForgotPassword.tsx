import React from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Arrow } from "@radix-ui/react-tooltip";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl space-y-8">
        <Link to="/auth/login" className="text blue-600 hover:text-blue-500">
          <ArrowLeft className="h-5 w-5 inline-block mr-2" />
          Back to Login
        </Link>

        <div className="text-center">
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Forgot Your Password?
          </h1>
          <p className="text-gray-600">
            No worries! Enter your email to receive a password reset link and
            get back to the fun.
          </p>
        </div>

        <form className="space-y-6">
          {" "}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              {" "}
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-10 pr-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border-pink-200 transition-colors"
                placeholder="Enter your email address"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              />
              <Mail
                size={20}
                className="absolute left-3 top-2.5 text-pink-400"
              />{" "}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-2.5 text-white font-bold rounded-full px-8 shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            Send Reset Link
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
