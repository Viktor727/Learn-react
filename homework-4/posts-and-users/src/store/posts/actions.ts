import { PostListProps } from "../../interfaces/interface";

const SET_USERS = "SET_USERS";
const SET_USERS_ACTION = (payload: PostListProps) => ({type: SET_USERS, payload});

const DELETE_USER = "DELETE_USER";
const DELETE_USER_ACTION = (payload: number) => ({type: DELETE_USER, payload});

const SET_USERID = "SET_USERID";
const SET_USERID_ACTION = (payload: number | string) => ({ type: SET_USERID, payload });

export {
  SET_USERS,
  SET_USERS_ACTION,
  DELETE_USER,
  DELETE_USER_ACTION,
  SET_USERID,
  SET_USERID_ACTION,
};