import React from "react";
import Article from "./Article";

function ArticleList(props) {
  const articleList = props.posts.map((post) => (
    <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
  ));

  return <main>{articleList}</main>;
}

export default ArticleList;
