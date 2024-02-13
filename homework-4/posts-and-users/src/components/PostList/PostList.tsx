// import * as React from "react";
import { useEffect, useContext } from "react";
import { fetchUsers, deleteUser } from "../../services/userServices";
// import reducer, { INITIAL_STATE } from "../../store/posts/reduce";
import { userInfo } from "../../interfaces/interface";
import { SET_USERS_ACTION, DELETE_USER_ACTION } from "../../store/posts/actions";
import PostsContext from "../../context/PostsContext";

import Button from "@mui/material/Button";

const PostList = () => {
  // const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { state, dispatch } = useContext(PostsContext);
  console.log("state postlist: ", state);

  useEffect(() => {
    fetchUsers().then((posts) => {
      if (posts !== null) {
        console.log("Data:", posts);
        dispatch(SET_USERS_ACTION(posts));
        // dispatch("SET_USERS_ACTION(posts)");
      } else {
        console.log("Error occurred during fetch.");
      }
    });
  }, [dispatch, state]);

  const handleDelete = (id: number | string) => {
    deleteUser(id).then((id) => {
      if (id !== null) {
        dispatch(DELETE_USER_ACTION(id));
      } else {
        console.log("Error occurred during fetch.");
      }
    });
  }

  return (
    <div>
      {state.selectedUserId === "All" ? state.posts.map((item: userInfo) => (
        <div
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          key={item.id}
        >
          <p>User: {item.userName}</p>
          <p>Title: {item.title}</p>
          <Button variant="outlined" onClick={() => {handleDelete(item.id)}}>Delete</Button>
        </div>
      )) : state.posts.map((item: userInfo) => (
          state.selectedUserId == item.id ?
            (<div
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              key={item.id}
            >
              <p>User: {item.userName}</p>
              <p>Title: {item.title}</p>
              <Button variant="outlined" onClick={() => {handleDelete(item.id)}}>Delete</Button>
            </div>) : ""
          ))
        }
    </div>
  );
};

export default PostList;
