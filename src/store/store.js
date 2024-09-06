import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import extractReducer from "./extractSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, extract: extractReducer },
});
