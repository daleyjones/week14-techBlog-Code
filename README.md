
# Tech Blog 
Welcome to My Tech Blog project! This web application allows developers to publish their tech-related articles, blog posts, and thoughts while also enabling them to engage with and comment on posts created by other developers. This project follows the Model-View-Controller (MVC) architectural pattern and utilizes various technologies to create a robust content management system (CMS).



* Table of Contents
* Project Overview
* User Story
* Features
* Installation
* Usage
* Technologies
* Contributing
* License


This Tech Blog project provides a platform for developers to share their technical knowledge, insights, and opinions with the community. Users can create accounts, publish articles, comment on posts, and interact with others who share their passion for technology.

User Story
markdown
Copy code
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
Features
User Registration and Authentication: Users can create accounts and log in securely.
Create and Edit Posts: Registered users can create new blog posts and edit existing ones.
Comment on Posts: Users can leave comments on blog posts to engage in discussions.
Dashboard: A personalized dashboard displays a user's own posts for easy management.
Responsive Design: The application is responsive and optimized for various screen sizes.
MVC Architecture: Utilizes the Model-View-Controller pattern for a structured codebase.
Sequelize ORM: Handles database operations efficiently.
Express-Session: Provides session management for user authentication.
# Installation
Clone the repository:


git clone https://github.com/daleyjones/week14-techBlog-Code.git
Navigate to the project directory:


cd tech-blog
Install the required dependencies:


npm install
Create a .env file and add your environment variables (e.g., database connection info, session secret):


DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
SESSION_SECRET=your_session_secret
Initialize the database:


npm run seed
Start the application:


npm start
Access the app in your browser at http://localhost:3001.

Usage
Visit the deployed app on Heroku: Tech Blog

Register for an account or log in if you already have one.

Create new blog posts or comment on existing ones.

Manage your posts using the dashboard.

# Technologies
1. Node.js: Backend JavaScript runtime.
2. Express.js: Web application framework.
3. Handlebars.js: Templating engine for views.
4. Sequelize: SQL-based Object-Relational Mapping (ORM) library.
5. MySQL: Database management system.
5. Express-Session: Middleware for session management.


# License
This project is licensed under the MIT License.

# Contact
If you have any questions or need further assistance, please feel free to contact me: https://github.com/daleyjones

