import {useContext} from 'react'
import PostsContext from "../../context/PostsContext";
import { userInfo } from '../../interfaces/interface';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMUI from "@mui/material/Select";
import { SET_USERID_ACTION } from '../../store/posts/actions';

const Select = () => {
  const {state, dispatch} = useContext(PostsContext);
  console.log(state);

  const handlerSelect = (value: string) => {
    dispatch(SET_USERID_ACTION(value));
    console.log("seeg", state);
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Names</InputLabel>
        <SelectMUI
          label="Names"
          onChange={(e) => handlerSelect(e.target.value)}
          value={state.selectedUserId}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {state.posts.map((item: userInfo) => (
            <MenuItem key={item.id} value={item.id}>
              {item.userName}
            </MenuItem>
          ))}
        </SelectMUI>
      </FormControl>
    </>
  );
};


export default Select;
