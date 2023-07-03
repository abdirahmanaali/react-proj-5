import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoadingTrue: (state) => {
      state.isLoading = true;
    },
    setLoadingFalse: (state) => {
      state.isLoading = false;
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setLoadingTrue, setLoadingFalse, toggleLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading.isLoading;

export default loadingSlice.reducer;
