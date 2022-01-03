import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Auth {
  isAuth: boolean
}

const initialState = {
  isAuth: false
} as Auth

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false
    },
    autoLogout(state, action: PayloadAction<number>) {
      setTimeout(() => {
        this.logout(state)
      }, action.payload)
    },
    login(state) {
      state.isAuth = true
    }
  }
})

export default authSlice.reducer
