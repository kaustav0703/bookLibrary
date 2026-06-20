import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addBook } from "../redux/bookSlice";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Keep track of form inputs in a single object
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    rating: "",
    imgUrl: "",
    category: "fiction", // Default selection to match slice schema
  });

  // Generic input handler to update form fields dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation guard
    if (!formData.title.trim() || !formData.author.trim()) return;

    // Dispatch the payload with a numeric ID timestamp
    dispatch(
      addBook({
        ...formData,
        id: Date.now(), 
      })
    );

    // Kick user back to dashboard on success
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
        
        <div className="mb-8 text-center">
          <span className="text-4xl">✍️</span>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Add Your Book
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Expand your literary collection by adding a new title below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., The Hobbit"
              className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-semibold text-slate-700">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              value={formData.author}
              onChange={handleChange}
              placeholder="e.g., J.R.R. Tolkien"
              className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Inline grid layout for rating and category selection */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            
            <div>
              <label htmlFor="rating" className="block text-sm font-semibold text-slate-700">
                Rating (out of 5.0)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                step="0.1"
                min="0"
                max="5"
                required
                value={formData.rating}
                onChange={handleChange}
                placeholder="e.g., 4.5"
                className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-slate-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
              >
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-fiction</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="self-help">Self Help</option>
              </select>
            </div>
            
          </div>

          <div>
            <label htmlFor="imgUrl" className="block text-sm font-semibold text-slate-700">
              Cover Image URL
            </label>
            <input
              type="url"
              id="imgUrl"
              name="imgUrl"
              required
              value={formData.imgUrl}
              onChange={handleChange}
              placeholder="https://example.com"
              className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 active:scale-[0.99]"
          >
            Add Book to Collection
          </button>

        </form>

      </div>
    </div>
  );
}
