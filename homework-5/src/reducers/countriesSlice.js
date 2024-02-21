import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: [
    {
      id: "1",
      name: {
        official: "Principality of Andorra",
        common: "Andorra",
      },
      currencies: {
        EUR: {
          name: "Euro",
          symbol: "€",
        },
      },
      capital: ["Andorra la Vella"],
      region: "Europe",
      subregion: "Southern Europe",
      languages: {
        cat: "Catalan",
      },
      flag: "🇦🇩",
      translations: {
        bre: {
          official: "Tiriad Douaroù Aostral hag Antarktikel Frañs",
          common: "Douaroù Aostral hag Antarktikel Frañs",
        },
        ces: {
          official: "Teritorium Francouzská jižní a antarktická území",
          common: "Francouzská jižní a antarktická území",
        },
        deu: {
          official: "Gebiet der Französisch Süd- und Antarktisgebiete",
          common: "Französische Süd- und Antarktisgebiete",
        },
      },
    },
  ],
  reducers: {
    setCountries: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      return action.payload;
    },
    deleteCountry: (state, action) => {
      const { payload: countryId } = action;

      // Create a new array excluding the specified country id using filter
      const updatedCountries = state.filter((country) => country.id !== countryId);

      // Return the updated state (directly returning the array, not creating a new object)
      return updatedCountries;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setCountries, deleteCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
