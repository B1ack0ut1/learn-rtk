import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts-async/postsSliceAsync";
import usersReducer from "../features/users/userSliceAsync";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
