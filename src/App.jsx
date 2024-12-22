import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import { HelmetProvider } from "react-helmet-async";
import AddVolunteerNeedPost from "./pages/Posts/AddVolunteerNeedPost";
import PrivateRoute from "./components/PrivateRoute";
import AllVolunteerPosts from "./pages/Posts/Posts";
import ManageMyVolunteerPosts from "./pages/Posts/ManageMyVolunteerPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/posts", element: <AllVolunteerPosts /> },
      // { path: "/volunteer/:id", element: <VolunteerDetailsPage /> },
      {
        path: "/add-post",
        element: (
          <PrivateRoute>
            <AddVolunteerNeedPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-post",
        element: (
          <PrivateRoute>
            <ManageMyVolunteerPosts />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
