// BlogList.js
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { fetchPosts } from "../services/api";
import Pagination from "./Pagination";

const BlogList = ({ blogs, dispatch }) => {
  const [updatedBlog, setUpdatedBlog] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await fetchPosts();
        dispatch({ type: "ADD_JSON_PLACEHOLDER_POSTS", payload: { posts } });
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUpdate = (index) => {
    setUpdateMode(true);
    setCurrentIndex(index);
    setUpdatedBlog(blogs[index].body);
  };

  const handleUpdateConfirm = () => {
    if (currentIndex !== null) {
      const confirmed = window.confirm("Do you want to update this blog?");
      if (confirmed) {
        dispatch({
          type: "UPDATE_BLOG",
          payload: { index: currentIndex, updatedBlog },
        });
        setUpdatedBlog("");
        setUpdateMode(false);
        setCurrentIndex(null);
      }
    }
  };

  const handleDelete = (index) => {
    const confirmed = window.confirm("Do you want to delete this blog?");
    if (confirmed) {
      dispatch({ type: "DELETE_BLOG", payload: { index } });
    }
  };

  const filteredBlogs = searchQuery
    ? blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.body.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : blogs;

  return (
    <Container className="mt-5">
      <Row xs={1} md={3} className="g-4">
        {currentPosts.map((blog, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Card.Text>
                  Date: {new Date(blog.date).toLocaleDateString()}
                </Card.Text>
                {updateMode && currentIndex === index && (
                  <div className="mb-3">
                    <Form.Control
                      as="textarea"
                      value={updatedBlog}
                      onChange={(e) => setUpdatedBlog(e.target.value)}
                    />
                    <Button
                      variant="success"
                      onClick={handleUpdateConfirm}
                      className="mt-2"
                    >
                      Confirm Update
                    </Button>
                  </div>
                )}
                {!updateMode && (
                  <div>
                    <Button
                      variant="outline-success"
                      onClick={() => handleUpdate(index)}
                      className="me-2"
                    >
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {!searchQuery && (
        <Pagination
          totalPages={Math.ceil(filteredBlogs.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
};

export default BlogList;
