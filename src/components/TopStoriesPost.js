import React from "react";

function TopStoriesPost({ posts }) {
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
      <ul style={{paddingInlineStart: 18}}>
        {posts.map((post) => {
          const { id, url, title, score, by } = post;
          let domain = (new URL(url));
          console.log(domain.origin);
          return (
          
            <li
              key={id}
              style={{ marginBlock: "5px",}}
            >
           
                <p style={{ marginBlock: 0, fontSize: "15px" }}>
                  <a
                    href={url}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {title} <span style={{color: "#3f3f3f", fontSize: '12px'}}>({domain.host})</span>
                  </a>
                </p>
                <p style={{ marginBlock: 0, fontSize: "11px", color: "#3f3f3f" }}>
                  {score} by {by}
                </p>
   
            </li>
          )
        } )}
      </ul>
    </div>
  );
}

export default TopStoriesPost;
