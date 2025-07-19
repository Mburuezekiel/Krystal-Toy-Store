import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Frown } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl space-y-6">
        <Frown size={64} className="mx-auto text-pink-500 mb-4" />
        <h1
          className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-2 drop-shadow-lg"
          style={{ fontFamily: "'Fredoka One'" }}
        >
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-sm mx-auto">
          Oops! It looks like this page wandered off to play somewhere else.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center py-3 px-6 rounded-full text-white font-bold shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-blue-600"
          style={{ fontFamily: "'Fredoka One'" }}
        >
          Return to  Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;