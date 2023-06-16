import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: true,
  out: true,
  openModal: false,
  stateAllUsers: true,
  navigationProfile: 0,
};

const ProfileHistorySlice = createSlice({
  name: "ProfileHistorySlice",
  initialState,
  reducers: {
    openModalRd: (state, action) => {
      state.openModal = action.payload;
    },
    changeStateNavigationProfile: (state, action) => {
      state.navigationProfile = action.payload;
    },
    changeEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
  // extraReducers: {},
});


export const { changeEdit, openModalRd, changeStateNavigationProfile } =
  ProfileHistorySlice.actions;
export default  ProfileHistorySlice.reducer;




