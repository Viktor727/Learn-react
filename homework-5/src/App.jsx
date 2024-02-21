import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchDataCountries} from "./services/services";
import PropTypes from "prop-types";
import { setCountries } from "./reducers/countriesSlice";

import Heading from "./components/Heading/Heading";
import Navigation from "./components/Navigation/Navigation";

// This App.jsx I use for fetch all data
function App({ children, title }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataCountries().then((dataFetch) => {
      if (dataFetch !== null && dataFetch[0] !== undefined) {
        console.log("it is this one problem", dataFetch);
        console.log("Data:", dataFetch);
        dispatch(setCountries(dataFetch));
      } else {
        console.log("Error occurred during fetch.");
      }
    });

    console.log("Updated Information on website");
  }, [dispatch]);

  return (
    <>
      <main style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: "600px" }}>
        {/* <h1 style={{margin: 0}}>Current page is: Home</h1> */}
        <Heading title={title}></Heading>
        <Navigation></Navigation>
        {children}
      </main>
    </>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};


export default App;
