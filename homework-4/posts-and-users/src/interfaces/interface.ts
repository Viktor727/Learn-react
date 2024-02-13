export interface userInfo {
  userName: string;
  title: string;
  id: string;
}

export interface PostListPropsSmall {
  posts: userInfo[];
}

export interface PostListProps extends PostListPropsSmall {
  selectedUserId: number | string;
}

// export type MyActionType = {
//   type: string;
//   payload?: [];
// };