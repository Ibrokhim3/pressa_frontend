import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    // token: localStorage.getItem("token"),
    // userRole:
    //   localStorage.getItem("userRole") &&
    //   JSON.parse(localStorage.getItem("userRole")),
  },
  reducers: {
    // setLogin: (state, { payload }) => {
    //   state.token = payload.token;
    //   state.userRole = payload.userRole;
    //   localStorage.setItem("token", payload.token);
    //   localStorage.setItem("userRole", JSON.stringify(payload.userRole));
    //   state.loading = false;
    // },
  },
});
