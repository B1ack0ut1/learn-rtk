import "./App.css";
import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";

import PostListAsync from "./features/posts-async/PostListAsync";

function App() {
  return (
    <>
      <AddPostForm />
      <PostListAsync />
    </>
  );
}

export default App;
