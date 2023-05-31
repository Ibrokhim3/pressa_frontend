import { useRoutes } from "react-router-dom";
import { AddPost, AdminPanel, LoginPage, MainPage, PostInfo } from "../pages";

const token = localStorage.getItem("token");

const routes = [
  {
    path: "/",
    element: <MainPage></MainPage>,
  },
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
    element: token ? <AdminPanel></AdminPanel> : <LoginPage></LoginPage>,
  },
];

export const ConfigRoutes = () => {
  return useRoutes(routes);
};
