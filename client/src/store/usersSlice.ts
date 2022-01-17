import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { User } from "../interface/User";

const initialState = {
  _id: "",
  name: "",
  email: "",
  isDogsitter: null,
  profilePhoto: "",
  imageGallery: [],
  payments: [],
  isAvailable: null,
  availability: null,
  price: null,
} as User;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      if (action.payload.isDogsitter) {
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isDogsitter = action.payload.isDogsitter;
        state.profilePhoto = action.payload.profilePhoto;
        state.imageGallery = action.payload.imageGallery;
        state.payments = action.payload.payments;
        state.isAvailable = action.payload.isAvailable;
        state.availability = action.payload.availability;
        state.price = action.payload.price;
      } else {
        state._id = action.payload._id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.profilePhoto = action.payload.profilePhoto;
        state.imageGallery = action.payload.imageGallery;
        state.payments = action.payload.payments;
      }
    },
    removeUser: (state) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.isDogsitter = null;
      state.profilePhoto = "";
      state.imageGallery = [];
      state.payments = [];
      state.isAvailable = null;
      state.availability = null;
      state.price = null;
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export const loggedInUser = (state: RootState) => state.users;
export default usersSlice.reducer;
