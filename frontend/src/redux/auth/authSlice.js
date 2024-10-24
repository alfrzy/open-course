import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isAuth: false,
  token: null,
  role: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user, role } = action.payload;
      state.isAuth = true;
      state.token = token;
      state.user = user;
      state.role = role;
      localStorage.setItem("token", token);
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
