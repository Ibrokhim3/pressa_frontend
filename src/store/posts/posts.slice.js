import { createSlice } from "@reduxjs/toolkit";

export const { actions: postsAction, reducer: postsReducer } = createSlice({
  name: "posts",
  initialState: {
    list: null,
    loading: false,
    error: null,
    searchValue: "",
    filterValue: null,
    dateValue: "",
    checkboxDirValue: "",
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
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
    setDateValue: (state, { payload }) => {
      state.dateValue = payload;
    },
    setDirCheckboxValue: (state, { payload }) => {
      state.checkboxDirValue = payload;
    },
    setFilterValue: (state, { payload }) => {
      state.filterValue = payload;
    },
  },
});
