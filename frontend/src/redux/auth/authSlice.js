import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isAuth: false,
  token: null,
  role: "",
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
      state.user = user;
      localStorage.setItem("token", action.payload);
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    checkAuth: (state) => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        console.log("sudah ada token");
        state.isAuth = true;
        state.token = token;
      }
    },
  },
});

export const { login, logout, checkAuth, setRole } = authSlice.actions;

export const useAuth = () => useSelector((state) => state.auth);

export default authSlice.reducer;
