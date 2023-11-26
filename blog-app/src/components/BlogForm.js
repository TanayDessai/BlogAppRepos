import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Button,Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
});

const BlogForm = ({ addBlog }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    addBlog(data);
    console.log("Blog post created successfully");
    reset();
    navigate("/");
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>Create a New Blog</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)} className="Form">
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" {...register("title")} />
              <Form.Text className="text-danger">
                {errors.title?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("body")} />
              <Form.Text className="text-danger">
                {errors.body?.message}
              </Form.Text>
            </Form.Group>

            <div className="text-center mt-3">
              <Button variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogForm;
