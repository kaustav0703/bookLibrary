import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.book);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Premium Hero Header Section */}
        <header className="mb-12 text-center">
          {/* Note: changed bg-linear-to-r to bg-gradient-to-r to align with standard Tailwind v3/v4 classes */}
          <h1 className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Welcome to your book collection
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
            Immerse yourself in stories, track your progress, and manage your personal library.
          </p>
        </header>

        {/* Styled Popular Books Heading */}
        <div className="mb-6 flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="text-xl">✨</span>
          <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Popular Books
          </p>
        </div>

        {/* Modern Fully Responsive Card Layout Grid */}
        <main>
          {books && books.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {books.map((book) => (
                <li key={book.id} className="group list-none transition-transform duration-300 hover:-translate-y-1">
                  <BookCard book={book} />
                </li>
              ))}
            </ul>
          ) : (
            /* Visual Fallback if state array is entirely empty */
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white py-16 px-4 text-center">
              <span className="text-4xl">📚</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Your library is empty</h3>
              <p className="mt-1 text-sm text-slate-500">Get started by adding some new titles to your list.</p>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
