import { createContext } from "react";
import { INITIAL_STATE } from "../store/posts/reduce";

const PostsContext = createContext(INITIAL_STATE);

export default PostsContext

