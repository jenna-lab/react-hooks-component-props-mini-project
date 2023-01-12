import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
    return (
      <main>
        {props.posts.map((post, index) => (
          <Article key={index} post={post} />
        ))}
      </main>
    );
  }
export default ArticleList;