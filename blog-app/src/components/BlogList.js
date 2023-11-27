import React, { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { fetchPosts } from "../services/api";
import Pagination from "./Pagination";

const BlogList = ({ blogs, dispatch, searchQuery ,props}) => {
  const [updatedBlog, setUpdatedBlog] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showUpdateConfirmationModal, setShowUpdateConfirmationModal] =
    useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const postsPerPage = 9;

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

  const handleShowUpdateConfirmationModal = () => {
    setShowUpdateConfirmationModal(true);
  };

  const handleCloseUpdateConfirmationModal = () => {
    setShowUpdateConfirmationModal(false);
  };

  const handleUpdateConfirm = () => {
    if (currentIndex !== null) {
      handleCloseUpdateConfirmationModal();
      dispatch({
        type: "UPDATE_BLOG",
        payload: { index: currentIndex, updatedBlog },
      });
      setUpdatedBlog("");
      setUpdateMode(false);
      setCurrentIndex(null);
    }
  };

  const handleDelete = (index) => {
    setCurrentIndex(index);
    handleShowDeleteConfirmationModal();
  };

  const handleShowDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(true);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
    setCurrentIndex(null);
  };

  const handleDeleteConfirm = () => {
    if (currentIndex !== null) {
      handleCloseDeleteConfirmationModal();
      dispatch({ type: "DELETE_BLOG", payload: { index: currentIndex } });
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
                <Card.Title
                  style={{
                    backgroundColor: "#3498db",
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "5px 5px 0 0",
                  }}
                >
                  {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                  }}
                >
                  {blog.body.charAt(0).toUpperCase() + blog.body.slice(1)}
                </Card.Text>
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
                      onClick={handleShowUpdateConfirmationModal}
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

      {/* Pagination and Modal components */}
      {!searchQuery && (
        <>
          <Pagination
            totalPages={Math.ceil(filteredBlogs.length / postsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showUpdateConfirmationModal}
            onHide={handleCloseUpdateConfirmationModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to update this blog?</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleCloseUpdateConfirmationModal}
              >
                Cancel
              </Button>
              <Button variant="success" onClick={handleUpdateConfirm}>
                Update
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showDeleteConfirmationModal}
            onHide={handleCloseDeleteConfirmationModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this blog?</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleCloseDeleteConfirmationModal}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default BlogList;
