import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: null,
    loading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSucess: (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload.user;
    },
    loginError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {loginStart,loginSucess,loginError} = userSlice.actions;
export default userSlice.reducer;
