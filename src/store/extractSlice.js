import { createSlice } from "@reduxjs/toolkit";

const extractInitialState = {
  origin: "",
  parameters: [],
  message: "",
};

export const extractSlice = createSlice({
  name: "extract",
  initialState: extractInitialState,
  reducers: {
    extract: (state, action) => {
      state.origin = action.payload.origin;
      state.parameters = action.payload.parameters;
      state.message = action.payload.message;
    },
  },
});

export const { extract } = extractSlice.actions;

export default extractSlice.reducer;
