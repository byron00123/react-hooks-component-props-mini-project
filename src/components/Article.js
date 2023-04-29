import React from "react";

function Article(props) {
  const { title, date, preview, minutes } = props;

  // Calculate number of coffee cups or bento boxes needed for 'Minutes to Read' feature
  let cupsOrBoxes = "";
  if (minutes < 30) {
    const numCups = Math.ceil(minutes / 5);
    cupsOrBoxes = "☕️".repeat(numCups);
  } else {
    const numBoxes = Math.ceil(minutes / 10);
    cupsOrBoxes = "🍱".repeat(numBoxes);
  }

  // Default value for date
  const formattedDate = date ? date : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{cupsOrBoxes} {minutes} min read</p>
    </article>
  );
}

export default Article;
