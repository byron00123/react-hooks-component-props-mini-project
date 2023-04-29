import React from "react";

function About(props) {
  // Set a default image URL if no image prop is passed
  const imageUrl = props.imageUrl || "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p style={{ whiteSpace: "pre-line" }}>{props.aboutText}</p>
    </aside>
  );
}

export default About;
