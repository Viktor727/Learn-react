import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "selects",
  initialState: {
    capital: "Kyiv",
    translation: "en",
  },
  reducers: {
    setCapital: (state, action) => {
      state.capital = action.payload;
    },
    setTranslation: (state, action) => {
      state.translation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCapital, setTranslation } = selectSlice.actions;

export default selectSlice.reducer;
