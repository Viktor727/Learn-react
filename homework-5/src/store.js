import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./reducers/countriesSlice";
import selectSlice from "./reducers/selectSlice";
import logger from "redux-logger";


export default configureStore({
  reducer: {
    countries: counterSlice,
    selects: selectSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
