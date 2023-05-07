import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.unshift(action.payload);
    },
    addUserFromStorage(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
    reducer: userSlice.reducer
});

export default store;
export const userActions = userSlice.actions;
