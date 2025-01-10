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
import { AuthProvider } from "./contexts/AuthContext";
import SinglePost from "./pages/Posts/SinglePost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdatePost from "./pages/Posts/UpdatePost";
import MyVolunteerRequestsPage from "./pages/BeAVolunteer/MyVolunteerRequestsPage";
import FAQ from "./pages/Faq";

const queryClient = new QueryClient();

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
      { path: "/faq", element: <FAQ /> },
      {
        path: "/posts/:id",
        element: (
          <PrivateRoute>
            <SinglePost />
          </PrivateRoute>
        ),
      },
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
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <UpdatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer-requests",
        element: (
          <PrivateRoute>
            <MyVolunteerRequestsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
