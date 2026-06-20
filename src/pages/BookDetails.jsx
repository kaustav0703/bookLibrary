import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function BookDetails() {
  // Extract dynamic ID parameter from current browser address url 
  const { id } = useParams();
  
  // Pull collection matrix stream down from central store slice
  const books = useSelector((state) => state.book);
  
  // Cross-reference data models parsing raw string keys into clean integers
  const selectedBook = books.find((book) => book.id === Number(id));

  // Short-circuit render escape hatch to prevent layout property compilation errors
  if (!selectedBook) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 text-gray-500">
        <p className="text-xl font-medium">Book not found.</p>
      </div>
    );
  }

  return (
    // Top level backdrop container maintaining structural centering
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 font-sans">
      {/* Central composite profile wrapper card with scaling constraints */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 sm:max-w-md md:max-w-lg">
        
        {/* Image Section */}
        <div className="mb-6 flex justify-center">
          <img 
            src={selectedBook.imgUrl}
            alt={selectedBook.title || "Book Cover"} 
            className="h-64 w-auto rounded-lg object-contain shadow-md sm:h-72 md:h-80"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {selectedBook.category}
          </span>
          
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {selectedBook.title}
          </h1>
          
          <p className="mt-1 text-sm font-medium text-gray-500 sm:text-base">
            by {selectedBook.author}
          </p>

          <div className="mt-4 flex items-center justify-center gap-1 text-lg font-semibold text-amber-500">
            <span>⭐️</span>
            <span>{selectedBook.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
