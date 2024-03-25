import { useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSliceAsync";
import { useEffect } from "react";

import PostAuthorAsync from "./PostAuthorAsync";
import TimeAgoAsync from "./TimeAgoAsnyc";
import ReactionButtonsAsync from "./ReactionButtonsAsync";

function PostListAsync() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthorAsync userId={post.userId} />
        <TimeAgoAsync timestamp={post.date} />
      </p>
      <ReactionButtonsAsync post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostListAsync;
