import { useRoutes } from "react-router-dom";
import {
  About,
  AddPost,
  AdminPanel,
  LoginPage,
  MainPage,
  PostInfo,
} from "../pages";

const token = localStorage.getItem("token");

const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
  // {
  //   path: "post-info",
  //   element: <PostInfo></PostInfo>,
  // },
  {
    path: "posts/:id",
    children: [
      {
        path: "",
        element: <PostInfo></PostInfo>,
      },
    ],
  },
  {
    path: "add-post",
    element: <AddPost></AddPost>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "admin-panel",
    element: <AdminPanel></AdminPanel>,
  },
  {
    path: "about",
    element: <About></About>,
  },
];

export const ConfigRoutes = () => {
  return useRoutes(routes);
};
