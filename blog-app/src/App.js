import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const initialState = { blogs: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      const newBlog = {
        ...action.payload.blog,
        date: new Date().toISOString(),
      };
      return { ...state, blogs: [...state.blogs, newBlog] };
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
        <NavBar onSearch={handleSearch}/>
        <Routes>
          <Route
            path="/"
            element={<BlogList blogs={state.blogs} dispatch={dispatch} />}
          />
          <Route path="/add" element={<BlogForm addBlog={addBlog} />} />
          <Route path="/search" element={<Search blogs={state.blogs} />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
