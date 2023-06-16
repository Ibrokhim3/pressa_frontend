import { configureStore } from "@reduxjs/toolkit";
import { postsReducer, userReducer } from "./posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});
