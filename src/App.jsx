import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage/> },
      // { path: "/volunteer/:id", element: <VolunteerDetailsPage /> },
    ],
  },
  // {
  //   path: "/profile",
  //   element: (
  //     <PrivateRoute>
  //       <ProfileLayout />
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     { path: "add-post", element: <AddPostPage /> },
  //     { path: "manage-posts", element: <ManagePostsPage /> },
  //   ],
  // },
  // { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
