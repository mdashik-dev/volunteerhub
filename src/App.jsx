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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    // ErrorBoundary: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      // { path: "/volunteer/:id", element: <VolunteerDetailsPage /> },
      { path: "/posts", element: <AddVolunteerNeedPost /> },
    ],
  },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoute>
  //       {/* <ProfileLayout /> */}
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     // { path: "manage-posts", element: <ManagePostsPage /> },
  //   ],
  // },
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
