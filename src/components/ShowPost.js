import React from "react";

function ShowPost({ posts }) {
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
        {posts.map((post) => (
          <li key={post.id} style={{ marginBlock: "5px" }}>
            <p style={{ marginBlock: 0, fontSize: "15px" }}>
              <a
                href={post.url}
                style={{ textDecoration: "none", color: "black" }}
              >
                {post.title}
              </a>
            </p>
            <p style={{ marginBlock: 0, fontSize: "11px", color: "#3f3f3f" }}>
              {post.score} by {post.by}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowPost;
