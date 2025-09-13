
import { createBrowserRouter} from "react-router";

import App from "../App";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import CreatePost from "../Pages/CreatePost/CreatePost";
import AllPost from "../Pages/AllPost/AllPost";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {
            path:'/',
            Component: Home,
        },
        {
            path:'about',
            element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
        },
        {
          path:`profile`,
          Component:Profile,
        
        },
       {
            path:'CreatePost',
            element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
        }, 
        {
          path:'allPosts',
          Component:AllPost,
        },
        {
          path:'updateProfile/:id',
          Component:UpdateProfile,
           loader: async ({params}) => {
      const res = await fetch(`http://localhost:5000/user/profile/${params.id}`);
      if (!res.ok) throw new Response("Failed to fetch", { status: res.status });
      return res.json();
          
        },
      },
    ]

  },
   
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
]);