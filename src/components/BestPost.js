import React from "react";

function BestPost({ posts }) {
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
    );
  }

  return (
    <div style={{backgroundColor: "#fffef2"}}>
      <ul style={{ paddingInlineStart: 18 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBlock: "5px" }}>
            <p style={{ marginBlock: 0, fontSize: "15px" }}>
              <span
                style={{ textDecoration: "none", color: "black" }}
              >
                {post.title}
              </span>
            </p>
            <p style={{ marginBlock: 0, fontSize: "11px", color: "#3f3f3f" }}>
              {post.score} by {post.by} | {post.descendants} comments
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestPost;
