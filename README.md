# Blog Post Panel

## Overview
This project is a **Blog Post Panel** where users can register and log in to create, read, edit, and delete their blogs. Users can also view blog posts created by other users, but only the author of a blog post has the ability to modify or delete their own content.

### Key Features:
1. **User Authentication**: Users can register, log in, and manage their sessions.
2. **Blog Management**: Users can create, view, edit, and delete their blogs.
3. **View Blogs**: All users can view blog posts made by others, but they can't edit or delete them.
4. **Image Uploads**: Users can upload images for their blogs using Multer.

## Project Stack

- **Frontend (UI)**: EJS (Embedded JavaScript)
- **Backend**: Express.js (Node.js Framework)
- **Database**: MongoDB (NoSQL Database)
- **Authentication**: Passport.js (Local strategy for user authentication)
- **File Uploads**: Multer (For handling image uploads)

## Features

### User Authentication:
- **Register**: Users can create an account by providing a username, email, and password.
- **Login**: Users can log in using the credentials created during registration.
- **Session Management**: Users are kept logged in using cookies and sessions. Session handling is done using Express sessions, and user authentication is managed by Passport.js.

### My Blog Management:
- **Add Blog**: Users can create a new blog post by providing a title, content, and an optional image (uploaded via Multer).
- **Edit Blog**: Logged-in users can edit the title, content, and image of their own blog posts.
- **Delete Blog**: Users have the option to delete their own blog posts.

### View Blogs:
- **All Blogs Page**: A public page where users can view all blogs created by other users. No editing or deletion is allowed on this page.
- **My Blogs Page**: A personal page where logged-in users can view, edit, or delete only their own blogs.

## Installation

### Prerequisites:
- [Node.js](https://nodejs.org/en/) installed on your machine
- [MongoDB](https://www.mongodb.com/) running locally or in the cloud (MongoDB Atlas)

### Steps:

1. **Clone the repository**:
```bash
    git clone https://github.com/Deeppatel-4032/Blog_panel_PR.git
```

2. **Install dependencies**:
```bash
    npm install
```


3. **Create a MongoDB database**:
- Create a new MongoDB database or use an existing one.
- Note down the connection string (e.g., `mongodb://localhost:27017/`
- Update the `db/adminPanel_db` file with your MongoDB connection string.

4. **Run the application**:
```bash
    npm start
```

5. Visit the app at `http://localhost:3012`.

## Project Structure

```bash
├── controllers/
│   ├── blog_controller.js     
│   ├── myBlog_Con.js 
│   ├── controller.js 
│   ├── login_controller.js 
│   ├── register_controller.js 
├── db/
│   ├── adminPanel.js       
├── middlewares/
│   ├── auth.js         
│   ├── multer_middleware.js         
│   ├── passpot_config.js         
├── models/
│   ├── blog_model.js                
│   ├── User_model.js                
├── routes/
│   ├── routes.js                  
├── public/uploads/         
├── views/
│   ├── blog_EditPage.ejs           
│   ├── blog_view.ejs           
│   ├── index.ejs              
│   ├── login.ejs              
│   ├── myBlogs.ejs            
│   ├── profile.ejs            
│   ├── register.ejs            
├── index.js              
├── README.md     
├── .env          
                 
```

## Dependencies

- **EJS**: Template engine for rendering views.
- **Express.js**: Web framework for building the backend.
- **MongoDB**: NoSQL database for storing user and blog information.
- **Multer**: Middleware for handling image uploads.
- **Passport.js**: Authentication middleware for handling user login/registration.
- **passport-local-mongoose**: Middleware for handling user authentication.
- **Express-Session**: For managing user sessions.
- **BCrypt**: For hashing and securing passwords.
- **Mongoose**: MongoDB ODM for interacting with the database.
- **Body-parser**: Middleware for parsing JSON bodies.
- **nodemailer**:  for sending email
- **otp-generator**:  for generating otp
- **connect-flash**:  for flash message
- **randomstring**:  randomstring generator for refrensh token string 




## Usage

1. **Registration**: Sign up by providing a username, email, and password.
2. **Login**: Log in with your registered credentials to access the blog management features.
3. **Create a Blog**: After logging in, users can navigate to the "Add Blog" page to create a new blog post.
4. **Edit/Delete Blogs**: Users can edit or delete only the blog posts they've created from the "My Blogs" page.
5. **View All Blogs**: All users, even those not logged in, can view all the blogs on the homepage.
6. **View Profile**: Users can view their own profile information, including their username and email,
from the "Profile" page.
7. **Logout**: Users can log out from the "Profile" page.
8. **Upload Image**: Users can upload an image for their blog post from the "Add Blog
page.
9. **Send Email**: Users can send email to other users forgot the password.
10. **Forgot Password**: Users can forgot the password and get the otp in email.
11. **Reset Password**: Users can reset the password using the otp.
12. **Flash Message**: Users can see the flash message after login, logout, forgot password,
reset password, and send email.
13. **Randomstring**: Users can see the randomstring after send email.
14. **OTP**: Users can see the otp after forgot password and reset password.
15. **Refrensh Token**: Users can see the refrensh token after send email.


## File Uploads
Images uploaded by users are stored in the `public/uploads` directory and served when viewing blog posts. Multer is used to handle the file uploads.

## Future Enhancements
- **Pagination**: Add pagination for the blog list to improve performance for large datasets.
- **Search Functionality**: Implement a search feature to allow users to find blogs by title or content.
- **User Profile**: Allow users to update their profiles, including username and email.
- **Commenting System**: Enable users to comment on blog posts.
- **Like System**: Implement a feature for users to "like" blog posts.
- **Admin Panel**: Create an admin panel for managing users, blogs, and comments.
- **Security**: Implement additional security measures, such as rate limiting and IP blocking, to prevent abuse
and ensure the integrity of the application.


### Contributing [ Deep patel ] 
Contributions are what make the open-source community such an amazing place to learn, inspire, and createFeel free to contribute by creating a pull request. Please ensure all code adheres to the project's coding standards and includes adequate tests.

## 🚀 About Me (https://github.com/Deeppatel-4032)
I'm Deep Patel, a passionate back-End developer. I'm interested in building scalable and efficient applications. I'm always eager to learn and improve my skills.




