import "./Form.scss";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { useSelector, useDispatch } from "react-redux";
import { setCapital, setTranslation } from "../../reducers/selectSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Form() {   
    const dispatch = useDispatch();

    const handleChangeFirst = (event) => {
      console.log("event.target22222", event.target);
      dispatch(setCapital(event.target.value));
    };

    const handleChangeSecond = (event) => {
      dispatch(setTranslation(event.target.value));
    };

    const countries = useSelector((state) => state.countries);
    const select = useSelector((state) => state.selects);

    const translObjKeys = countries
                  .filter((item) => item.capital[0] === select.capital)
                  .map((item) => Object.keys(item.translations))[0] || ["en"];

    const translObjKeysZero = translObjKeys[0] || 'en';

    useEffect(() => {
      if(countries[0]){
        dispatch(setCapital(countries[0].capital[0]));
        dispatch(setTranslation(Object.keys(countries[0].translations)[0]));
      }
    }, [countries, dispatch]);

    useEffect(() => {
      dispatch(setTranslation(translObjKeysZero));
    }, [select.capital]);


  return (
    <>
      <div className="form">
        <h2 className="form-heading">Capital Form Component</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormControl fullWidth>
            <InputLabel sx={{ textAlign: "left" }}>Select Capital</InputLabel>
            <Select
              sx={{ textAlign: "left" }}
              value={select.capital}
              label="Capital"
              onChange={handleChangeFirst}
            >
              {countries.map((item) => (
                <MenuItem value={item.capital[0]} key={item.id}>
                  <span style={{ marginRight: "1rem" }}>{item.flag}</span>
                  {item.capital[0]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel sx={{ textAlign: "left" }}>
              Select Translation
            </InputLabel>
            <Select
              sx={{ textAlign: "left" }}
              value={select.translation}
              label="Translation"
              onChange={handleChangeSecond}
            >
              {translObjKeys.map((translation, index) => (
                <MenuItem value={translation} key={index}>
                  {translation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Link to={`/countries/${select.capital}?translation=${select.translation}`}>
            <Button variant="contained">Read more about</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Form;
