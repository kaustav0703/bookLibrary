import { NavLink } from "react-router";

export default function BookCard({ book }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Aspect Ratio Boxed Book Cover Image */}
      <div className="aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-100">
        <img
          src={book.imgUrl}
          alt="Image of a book"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Book Metadata & Title Block */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <p className="line-clamp-2 text-base font-bold tracking-tight text-slate-800 sm:text-lg">
          {book.title}
        </p>

        {/* Details Anchor Link Container */}
        <div className="mt-4 pt-3 border-t border-slate-50">
          <a className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 transition-colors duration-200 hover:text-indigo-700">
            <NavLink to={`/book-details/${book.id}`}>
              {" "}
              More Details
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </NavLink>
          </a>
        </div>
      </div>
    </div>
  );
}
