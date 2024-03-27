import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSliceAsync";

const reactionEmoji = {
  thumbsUp: "😮",
  wow: "🧡",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;