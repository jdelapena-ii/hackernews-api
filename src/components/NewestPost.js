import React from "react";

function NewestPost({ posts }) {
  if (posts.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: 700,
          marginBlock: 20,
        }}
      >
        Loading Posts...
      </div>
    )
  }

  return (
    <div style={{backgroundColor: "#fffef2"}}>
      <ul style={{ paddingInlineStart: 18 }}>
        {posts.map((post) => {
          const { id, url, title, score, by, descendants } = post;
          return (
            <li key={id} style={{ marginBlock: "5px" }}>
              <p style={{ marginBlock: 0, fontSize: "15px" }}>
                <a
                  href={url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {title} 
                </a>
              </p>
              <p style={{ marginBlock: 0, fontSize: "11px", color: "#3f3f3f" }}>
                {score} by {by} | {descendants} comments
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default NewestPost;
