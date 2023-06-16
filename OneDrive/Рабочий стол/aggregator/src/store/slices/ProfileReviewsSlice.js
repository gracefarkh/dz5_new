import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nurdin: false,
};

const ProfileReviewsSlice = createSlice({
  name: "ProfileReviewsSlice",
  initialState,
  reducers: {
    cahnge: (state, action) => {
      state.nurdin = action.payload;
    },
  },
});

export const getReviews = createAsyncThunk(
  "getReviews",
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

export const {} = ProfileReviewsSlice.actions;
export default ProfileReviewsSlice.reducer;
