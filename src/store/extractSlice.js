import { createSlice } from "@reduxjs/toolkit";

const extractInitialState = {
  url: "",
  result: [],
};

export const extractSlice = createSlice({
  name: "extract",
  initialState: extractInitialState,
  reducers: {
    extract: (state, action) => {
      state.url = action.payload.url;
      state.result = action.payload.result;
    },
  },
});

export const { extract } = extractSlice.actions;

export default extractSlice.reducer;
