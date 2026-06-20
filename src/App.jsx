import { RouterProvider, createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import BrowseBooks from "./pages/BrowseBooks";
import NotFound from "./pages/NotFound";

// Define application routing tree with structural hierarchies
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Wraps children with shared elements like Navbars or Footers
    children: [
      {
        index: true, // Default view rendered at the base domain route
        Component: Home,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "book-details/:id", // Dynamic parameter matches the state lookups
        Component: BookDetails,
      },
      {
        path: "browse-books",
        Component: BrowseBooks,
      },
      {
        path: "books/:category", // Reuses Browse component with dynamic category filtering
        Component: BrowseBooks
      },
      {
        path: "*", // Wildcard fallback path to catch broken or typing URLs
        Component: NotFound,
      },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
