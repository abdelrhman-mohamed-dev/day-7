import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Porfile from "./pages/porfile";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Blog from "./pages/blog";
import BlogPost from "./pages/blogPost";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/profile",
          element: <Porfile />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:id",
          element: <BlogPost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
