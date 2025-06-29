import { createSlice } from "@reduxjs/toolkit";

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // ✅ correct use of payload
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Selector
export const selectUser = (state) => state.user.user;

// Export reducer for the store
export default userSlice.reducer;
