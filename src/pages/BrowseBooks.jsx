import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { NavLink, useParams } from "react-router";

export default function BrowseBooks() {
  const books = useSelector((state) => state.book);

  const { category = "all" } = useParams();
  const activeCategory = category.toLowerCase(); // Will correctly match "non-fiction", "sci-fi", "self-help"

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Premium Hero Header Section */}
        <header className="mb-12 text-center">
          <h1 className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Welcome to your book collection
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
            Immerse yourself in stories, track your progress, and manage your
            personal library.
          </p>
        </header>

        {/* Responsive Horizontal Scroll Category Navigation */}
        <nav className="categories mb-12">
          <ul className="no-scrollbar flex items-center justify-start gap-3 overflow-x-auto pb-3 sm:justify-center">
            {/* All Books NavLink (Uses end prop so it only highlights when path is exact) */}
            <NavLink
              to="/browse-books"
              end
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`
              }
            >
              All Books
            </NavLink>

            {/* Fiction Link */}
            <NavLink
              to="/books/fiction"
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`
              }
            >
              Fiction
            </NavLink>

            {/* Non-Fiction Link */}
            <NavLink
              to="/books/non-fiction"
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`
              }
            >
              Non-Fiction
            </NavLink>

            {/* Sci-Fi Link */}
            <NavLink
              to="/books/sci-fi"
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`
              }
            >
              Science Fiction
            </NavLink>

            {/* Self Help Link */}
            <NavLink
              to="/books/self-help"
              className={({ isActive }) =>
                `cursor-pointer whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`
              }
            >
              Self Help
            </NavLink>
          </ul>
        </nav>

        {/* Modern Fully Responsive Card Layout Grid */}
        <main>
          {books.filter(
            (book) =>
              activeCategory === "all" || book.category === activeCategory,
          ).length > 0 ? (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {books
                .filter(
                  (book) =>
                    activeCategory === "all" ||
                    book.category === activeCategory,
                )
                .map((book) => (
                  <li
                    key={book.id}
                    className="group list-none transition-transform duration-300 hover:-translate-y-1"
                  >
                    <BookCard book={book} />
                  </li>
                ))}
            </ul>
          ) : (
            /* UI Empty State Element Add-on */
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white py-16 px-4 text-center">
              <span className="text-4xl">📚</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No books found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                There are no matches under this category yet.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
