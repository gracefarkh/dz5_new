import { configureStore } from "@reduxjs/toolkit";
import ProfileReviewsSlice from "./slices/ProfileReviewsSlice";
import ProfileHistorySlice from "./slices/ProfileHistorySlice";

export default configureStore({
  reducer: {
    ProfileHistorySlice,
    ProfileReviewsSlice,
  },
});
