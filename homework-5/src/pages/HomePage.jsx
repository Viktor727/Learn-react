import Form from "../components/Form/Form";
// import App from "../App";

import { useSelector } from "react-redux";
import { useEffect } from "react";

import App from "../App";

function HomePage() {
    const countries = useSelector((state) => state);
    
    useEffect(() => {
        console.log(countries);
    });

    return (
      <>
        <App title={"Home Component 🏡"}>
          <Form></Form>
        </App>
      </>
    );
}

export default HomePage;