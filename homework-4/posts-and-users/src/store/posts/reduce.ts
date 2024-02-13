import { PostListProps } from './../../interfaces/interface';
import { SET_USERS, DELETE_USER, SET_USERID } from "./actions";

type MyActionType = {
  type: string;
  payload?: unknown;
};

const INITIAL_STATE: PostListProps = {
  posts: [
    {
      userName: "Viktor",
      title: "Frontend",
      id: "23",
    }
  ],
  selectedUserId: 'All',
};

export default function reducer(state: PostListProps, action: MyActionType): PostListProps{
  switch (action.type) {
    case SET_USERS:
      console.log("reducer action: ", action);
      return { ...state, posts: Array.isArray(action.payload) ? action.payload : [] };

    case DELETE_USER:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case SET_USERID:
    return {
      ...state,
      selectedUserId: action.payload,
    };
    
    default:
      return { ...state };
  }
}

export { INITIAL_STATE, reducer };