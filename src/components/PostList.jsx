import React from "react";
import PostItem from "./post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, removeFunc }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Постов нет</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem number={index + 1} post={post} remove={removeFunc} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
