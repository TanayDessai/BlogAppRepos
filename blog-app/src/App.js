import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Image from "react-bootstrap/Image";
import blogImg from "./blog.jpeg";
import styled from "styled-components";

export const Heading = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-family: "Poppins", sans-serif;
`;

const initialState = { blogs: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      const newBlog = {
        ...action.payload.blog,
        date: new Date().toISOString(),
      };
      return { ...state, blogs: [newBlog, ...state.blogs] };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((_, index) => index !== action.payload.index),
      };
    case "UPDATE_BLOG":
      const updatedBlogs = state.blogs.map((blog, index) =>
        index === action.payload.index
          ? { ...blog, body: action.payload.updatedBlog }
          : blog
      );
      return { ...state, blogs: updatedBlogs };
    default:
      return state;
  }
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
     const fetchPosts = async () => {
       try {
         const response = await fetch(
           "https://jsonplaceholder.typicode.com/posts"
         );
         const posts = await response.json();
         const formattedPosts = posts.map((post) => ({
           title: post.title,
           body: post.body,
           date: new Date().toISOString(),
         }));
         dispatch({
           type: "ADD_JSON_PLACEHOLDER_POSTS",
           payload: { posts: formattedPosts },
         });
       } catch (error) {
         console.error("Error fetching posts:", error);
       }
     };

     fetchPosts();
   }, []);

  const addBlog = (blog) => {
    dispatch({ type: "ADD_BLOG", payload: { blog } });
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === "") {
      dispatch({ type: "RESET_SEARCH" });
    } else {
      const filteredBlogs = state.blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch({ type: "SET_SEARCH_RESULTS", payload: { filteredBlogs } });
    }
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Heading className="text-center mt-5">
        "Words Create Worlds: Welcome to Our Blogging Universe."
      </Heading>
      <Image
        src={blogImg}
        fluid
        className="mt-5"
        style={{ width: "100%", margin: "0 auto", justifyContent: "center" }}
      />
      <Routes>
        <Route
          path="/"
          element={<BlogList blogs={state.blogs} dispatch={dispatch} />}
        />
        <Route path="/add" element={<BlogForm addBlog={addBlog} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
