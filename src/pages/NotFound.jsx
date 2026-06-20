import { useNavigate } from "react-router"; // or "react-router-dom"

export default function NotFound() {
  // Hook to handle routing redirects programmatically
  const navigate = useNavigate();

  return (
    // Screen wrapper to force full-height flex centering
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center font-sans">
      {/* Central content card layout */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        
        {/* Massive numeric header for visual weight */}
        <h1 className="text-8xl font-extrabold tracking-tight text-indigo-600 sm:text-9xl">
          404
        </h1>
        
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>
        
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Sorry, we couldn't find the book or page you are looking for. It might have been moved or deleted.
        </p>

        <div className="mt-8">
          {/* Escape-hatch button to safely route lost users back to the index page */}
          <button
            onClick={() => navigate("/")}
            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors sm:w-auto"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
