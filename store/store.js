import { configureStore } from "@reduxjs/toolkit";
import uiStore from './uiStore';
import authStore from "./authStore";

const store = configureStore({
  reducer: { uiState: uiStore  }
});

export default store;
