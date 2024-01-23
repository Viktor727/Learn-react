import React, { useEffect, useState, useRef, ChangeEvent, memo, useCallback } from "react";

import Tables from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Input from "@mui/material/Input";

import {fetchDataList, fetchDataListDelete, fetchDataListUpdate} from "../../services/services.js";
import List from "../../constants/interfaces.js";

// {title: string, completed: boolean}
const Table = memo((props) => {
  const [data, setData] = useState<Array<List>>([]);
  const input = useRef<HTMLInputElement | null>(null);
  
  useEffect(() => {
    fetchDataList("https://65a040c2600f49256fafc441.mockapi.io/todos").then(
      (dataFetch) => {
        if (dataFetch !== null) {
          console.log("Data:", dataFetch);
          setData(dataFetch);
        } else {
          console.log("Error occurred during fetch.");
        }
      }
    );
    console.log('Updated Information on website');
  }, [props.click]);

  const handleCheckbox = (index: number, id: number) => {
    if (data !== null) {
      let newData = [...data]; //stagr
      newData[index].status = !newData[index].status;
      console.log(!newData[index].status);
      setData(newData);

      newData = data.filter((item) => Number(item.id) === id);
      newData[0].isEditing = true;
      console.log(newData[0]);
      fetchDataListUpdate(
        `https://65a040c2600f49256fafc441.mockapi.io/todos/${id}`,
        newData[0]
      );
    }
  };

  const handlerDelete = (id: number) => {
    if (data !== null) {
      // console.log(id);
      fetchDataListDelete(
        `https://65a040c2600f49256fafc441.mockapi.io/todos/${id}`
      );

      const newData = data.filter((item) => Number(item.id) !== id);
      console.log(newData);

      setData(newData);
    }
  };

  const handleUpdateTitle = (id: number) => {
    if (data !== null) {
      if (input.current) {
        console.log(id);
        const newData = data.filter((item) => Number(item.id) === id);

        // console.log(input.current.querySelector("input").value);
        fetchDataListUpdate(
          `https://65a040c2600f49256fafc441.mockapi.io/todos/${id}`,
          newData[0]
        );
      }
    }
  };

  const inputChange = useCallback((event: ChangeEvent<HTMLInputElement>, key: number) => {
    console.log(event.currentTarget.value);
    const newData = [...data];
    newData[key].title = event.currentTarget.value;
    console.log(newData);
    setData(newData);
  }, [data]);

  return (
    <>
      <TableContainer component={Paper}>
        <Tables sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">TITLE</TableCell>
              <TableCell align="left">IS-EDITING</TableCell>
              <TableCell align="left">EDIT</TableCell>
              <TableCell align="left">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data !== null ? (
              <>
                {data.map((item: List, key: number) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{item.id}</TableCell>
                    <TableCell align="left">
                      <Input
                        ref={input}
                        defaultValue={item.title}
                        sx={{ mr: 2 }}
                        onChange={(event) => inputChange(event, key)}
                      ></Input>
                      {/* onChange={handleChangeInput} */}
                      <Button
                        variant="contained"
                        onClick={() => handleUpdateTitle(Number(item.id))}
                      >
                        Submit
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      {item.isEditing ? "Edited" : ""}
                    </TableCell>
                    <TableCell align="left">
                      <Checkbox
                        checked={item.status}
                        onChange={() =>
                          handleCheckbox(Number(key), Number(item.id))
                        }
                      />
                    </TableCell>

                    <TableCell align="left">
                      <Button
                        onClick={() => handlerDelete(Number(item.id))}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              ""
            )}
          </TableBody>
        </Tables>
      </TableContainer>
    </>
  );
});

export default Table;
