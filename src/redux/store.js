import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice";
import loadingReducer from "../redux/slices/loadingSlice";

export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
    loading: loadingReducer,
  },
});
