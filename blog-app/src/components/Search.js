// Search.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Search = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Posts</h2>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (!e.target.value.trim()) {
              setSearchResults([]); // Clear results if search query is empty
            }
          }}
        />
        <Button variant="info" onClick={handleSearch}>
          Search
        </Button>
      </div>
      {searchQuery
        ? searchResults.map((blog, index) => (
            <div key={index} className="Post">
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
            </div>
          ))
        : // Display all posts when the search query is empty
          blogs.map((blog, index) => (
            <div key={index} className="Post">
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
            </div>
          ))}
    </div>
  );
};

export default Search;
