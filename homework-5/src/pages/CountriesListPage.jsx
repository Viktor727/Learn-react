import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { fetchDataListDelete, fetchDataCountries } from "../services/services";
import { deleteCountry, setCountries } from "../reducers/countriesSlice";

function CountriesListPage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();

  const handleDelete = (id) => {
        fetchDataListDelete(id).then((id) => {
            if (id !== null) {
                dispatch(deleteCountry(id));
                navigate("/countries");
                fetchDataCountries().then((dataFetch) => {
                  if (dataFetch !== null) {
                    console.log("Data:", dataFetch);
                    dispatch(setCountries(dataFetch));
                  } else {
                    console.log("Error occurred during fetch.");
                  }
                });
            } else {
                console.log("Error occurred during fetch.");
            }
        });
    }



  console.log(countries);
    return (
      <>
        <App title={"Country List 🏡"}>
          <div className="form">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "1rem" }}>
              {countries.map((item, index) => (
                <div style={{display: "flex", alignItems: "center", gap: "1rem"}} key={index}>
                  <Link to={`/countries/${countries[index].capital[0]}`} style={{display: "flex", gap: "0.5rem"}}>
                    <span>{item.flag}</span>
                    {item.name.official}
                  </Link>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete Country
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </App>
        
      </>
    );
}

export default CountriesListPage;