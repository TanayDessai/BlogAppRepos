# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


//////////////////////////////////////////////////////////////////////////////
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