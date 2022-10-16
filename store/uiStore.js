import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { sideBar : false,  showBars : true };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showSideBar(state) {
        state.sideBar = !state.sideBar;
    },
  },
});


export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
