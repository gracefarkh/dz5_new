import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nurdin: false,
};

const ProfileFavorits = createSlice({
  name: "ProfileFavorits",
  initialState,
  reducers: {
    cahnge: (state, action) => {
      state.nurdin = action.payload;
    },
  },
});

export const getFavorits = createAsyncThunk(
  "getFavorits",
  async function (userInfo, { dispatch }) {
    try {
      const { data } = await axios.get(
        "https://kitepkana1.pythonanywhere.com/books/"
      );
      console.log(data);
    } catch {
      // Обработка исключений
      console.log("error ");
    }
  }
);

export const {} = ProfileFavorits.actions;
export default ProfileFavorits.reducer;
