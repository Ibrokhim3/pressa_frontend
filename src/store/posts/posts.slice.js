import { createSlice } from "@reduxjs/toolkit";

export const { actions: postsAction, reducer: postsReducer } = createSlice({
  name: "posts",
  initialState: {
    list: null,
    loading: false,
    error: null,
    searchValue: ""
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setSearchValue: (state, {payload})=>{
      state.searchValue = payload
    }
  },
});
