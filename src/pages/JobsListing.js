import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import JobsPost from "../components/JobsPost";
import Pagination from "../components/Pagination";

function JobsListing() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25); 

  useEffect(() => {
    async function getJobs() {
      const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 150)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
        
      } catch (err) {
        console.error(err);
      }
    }
    getJobs();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <JobsPost posts={currentPosts} />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> 
    </div>
  );
}

export default JobsListing;