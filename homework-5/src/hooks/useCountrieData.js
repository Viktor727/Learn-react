// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchDataCountries } from "./services/services";

// import { setCountries } from "./reducers/countriesSlice";

// // This App.jsx I use for fetch all data
// function useCountrieData() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchDataCountries().then((dataFetch) => {
//       if (dataFetch !== null) {
//         console.log("Data:", dataFetch);
//         dispatch(setCountries(dataFetch));
//       } else {
//         console.log("Error occurred during fetch.");
//       }
//     });

//     console.log("Updated Information on website");
//   }, [dispatch]);
// }

// export default useCountrieData;
