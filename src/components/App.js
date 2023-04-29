import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  // Example post data
  const posts = [
    {
      id: 1,
      title: "The WET Codebase",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "Goodbye, Clean Code",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 3,
      title: "My Decade in Review",
      content: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <div>
      <Header blogName="Overracted" />
      <About
        imageUrl="https://example.com/my-image.jpg"
        aboutText={`Personal blog by Dan Abramov.\nI explain with words and code.`}
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
