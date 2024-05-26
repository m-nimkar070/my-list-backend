### Instructions for Setting Up and Running the Application

1. Prerequisites:
Ensure you have the following installed on your machine:
Node.js (version 14.x or higher)
npm (version 6.x or higher)
MongoDB

2. Clone the Repository:

3. Install Dependencies:

Navigate to the project directory and install the required dependencies:

4. Set Up Environment Variables:
Create a .env file in the root of the project and configure the necessary environment variables.

5. Start MongoDB: If you are using mongoDB locally else no need.

6. Run the Application:  npm run dev   / npm start
7. Running Tests:
To run the tests using Jest, use the following command:     npm test

8. API Endpoints:

The application exposes several RESTful API endpoints. Here are some key ones:

## User Endpoints:

Create a User:
POST /api/users

## Movie Endpoints:

Add a Movie:
POST /api/movies

## TV Show Endpoints:

Add a TV Show:
POST /api/tvshows

## Add movie/tv show to user fav-list:

POST api/list/users/:userId/mylist

## Delete a movie/tev show from user fav-list:

DELETE api/list/users/:userId/mylist

## Get list from user 

GET api/list/users/:userId/mylist
### Design Choices and Optimizations for Performance and Scalability
1. Modular Architecture:
Choice: We’ve designed the app with a modular architecture, splitting it into distinct parts like routes, controllers, models, and services.
Reason: This makes the app easier to maintain, read, and test. Each module has a specific role, making it simpler to manage and scale as we grow.

2. Use of TypeScript:
Choice: We’re using TypeScript to ensure type safety and enhance the developer experience.
Reason: TypeScript catches errors early during compile-time, offers better tooling support (like auto-completion and refactoring), and helps us write more robust code with strict type definitions.

3. RESTful API Design:
Choice: Our API endpoints follow REST principles (e.g., /api/users, /api/movies, /api/tvshows, /api/mylist).
Reason: RESTful APIs are stateless and scalable, making it easy to integrate with different clients (web, mobile) and simplifying the addition of new features.

4. Use of MongoDB:
Choice: We chose MongoDB as our database.
Reason: MongoDB, a NoSQL database, is great for handling semi-structured data like user preferences and watch history. It’s also very scalable, supporting horizontal scaling through sharding.

5. Middleware for Performance Optimization:
Choice: We’re using middleware like cors, body-parser, and express.urlencoded to handle cross-origin requests, parse JSON payloads, and handle URL-encoded data.
Reason: Middleware ensures that requests and responses are processed efficiently, which boosts overall performance.

6. Pagination for Large Data Sets:
Choice: We’ve implemented pagination in the List My Items endpoint to handle large user lists.
Reason: Pagination breaks down large data sets into smaller, manageable chunks, reducing server load and improving response times.

### Updated deployment link
https://my-list-backend-095n.onrender.com

### Postman collection JSON file
https://drive.google.com/file/d/1ky71r0gkTKNhVU1fwa36hzyXyGW-Q-AT/view?usp=drivesdk
