# BlogAppRepos
Blog Application
Blogging App
This is a simple blogging application built with React and styled with Bootstrap. Users can create, update, and delete blog posts. The application uses the JSONPlaceholder API to fetch and display sample blog posts.

Table of Contents
Installation
Features
Usage
Styling
Components
API Integration
Custom Hooks
Installation


Clone the repository:
Copy code
git clone https://github.com/TanayDessai/BlogAppRepos

Install dependencies:
Copy code
npm install

Run the application:
Copy code
npm start

Features
View a list of blog posts.
Create a new blog post.
Update an existing blog post.
Delete a blog post.
Usage
Viewing Blog Posts:

The home page (/) displays a list of blog posts.
Each post includes a title, body, and date.
Creating a Blog Post:

Navigate to the "ADD POST" link in the navigation bar.
Fill in the title and body fields in the form.
Click the "Submit" button to create a new blog post.
Updating a Blog Post:

Each blog post includes an "Update" button.
Click the "Update" button to edit the post's body.
Confirm the update by clicking the "Confirm Update" button.
Deleting a Blog Post:

Each blog post includes a "Delete" button.
Click the "Delete" button to remove the post.
Styling
The application uses Bootstrap for styling.
Fonts are styled using the "Poppins" font family.
The color scheme is simple, with primary colors for headings and buttons.
Components
NavBar
Navigation bar component with a search bar and "ADD POST" link.
Footer
Footer component with contact information, social media links, and a disclaimer.
BlogForm
Form component for creating a new blog post.
BlogList
Component to display a list of blog posts.
Supports updating and deleting posts.
Pagination for easy navigation through multiple posts.
API Integration
The application fetches sample blog posts from the JSONPlaceholder API.
The API is used for fetching initial data and creating/updating/deleting blog posts.
Custom Hooks
useFetch
Custom hook for fetching data from an API.
Handles loading, error, and refetching data.
useForm
Custom hook for handling form state using the React Hook Form library.
Registers form fields, handles submission, and resets the form.