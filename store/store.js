import { configureStore } from "@reduxjs/toolkit";
import uiStore from './uiStore';

const store = configureStore({
  reducer: { uiState: uiStore }
});

export default store;
