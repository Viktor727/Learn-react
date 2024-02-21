import { useParams, useLocation, useNavigate } from "react-router-dom";
import { DisplayObjectData } from "../components/DisplayObjectData/DisplayObjectData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import { fetchDataListDelete } from "../services/services";
import App from "../App";
import { deleteCountry } from "../reducers/countriesSlice";
import { Button } from "@mui/material";

function CountryPage() {
    const disptach = useDispatch();
    const navigate = useNavigate();

    const { country } = useParams(); // country data from link

    const countries = useSelector((state) => state.countries);
    const currentData = countries.filter((item) => item.capital[0] === country)[0];
    console.log(countries);
    
    
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    console.log(currentData);
    const translation = queryParams.get("translation") !== undefined ? queryParams.get("translation") : currentData.name !== undefined ? countries[0].name : "";  //translation data from link
    console.log(translation);

    const handleDelete = (id) => {
        fetchDataListDelete(id).then((id) => {
            if (id !== null) {
                disptach(deleteCountry(id));
                navigate("/countries");
            } else {
                console.log("Error occurred during fetch.");
            }
        });
    }

    let officialName = countries.filter((item) => item.capital[0] === country).map((item) => item.translations[translation]?.official);
    officialName = officialName[0] !== undefined ? officialName : countries.filter((item) => item.capital[0] === country).map((item) => item.name.official)[0];

  return (
    <>
      <App title={officialName}>
        <div className="form">
          {/* <h2 className="form-heading">{officialName}</h2> */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          ></div>

          <div style={{ textAlign: "left" }}>
            <DisplayObjectData dataObject={currentData} />
          </div>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <Button
              variant="outlined"
              onClick={() => {
                handleDelete(currentData.id);
              }}
            >
              Delete Country
            </Button>
          </div>
        </div>

        <Link
          to={`/countries`}
          style={{ display: "flex", justifyContent: "left" }}
        >
          <Button variant="contained">Back to countries</Button>
        </Link>
      </App>
    </>
  );
}

export default CountryPage;
