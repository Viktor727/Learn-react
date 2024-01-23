import { useRef } from "react";
import { fetchDataListCreate } from "../../services/services";

import { Input, Button } from "@mui/material";
function AddTableRow(props) {
  // const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handlerClick = () => {
    fetchDataListCreate("https://65a040c2600f49256fafc441.mockapi.io/todos/", {
      title: props.input,
      completed: false,
    }).then(() => {
      props.setClick(props.click + 1);
    });
  }

  const handlerChange = (event) => {
    props.setInput(event.target.value);
  };

  return (
    <>
      <h2 style={{ textAlign: "left" }}>Добавити нові дані: </h2>
      <div style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        <Input placeholder="Створити новий рядок" ref={inputRef} value={props.input} onChange={(event) => {handlerChange(event)}}></Input>
        <Button variant="contained" onClick={handlerClick}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default AddTableRow;
