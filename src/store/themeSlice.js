import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  value: "dark",
  icon: "./light-mode.svg",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    setDarkTheme: (state) => {
      state.value = "dark";
      state.icon = "./light-mode.svg";
    },
    setLightTheme: (state) => {
      state.value = "light";
      state.icon = "./dark-mode.svg";
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
