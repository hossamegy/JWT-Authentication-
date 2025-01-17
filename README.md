# Authentication API with JWT and MongoDB

This is a simple authentication system built with Node.js, Express, JWT (JSON Web Tokens), and MongoDB. The API allows users to log in and access a dashboard, with token-based authentication for secure access.

## Features

- User login with JWT authentication.
- Protected routes (e.g., `/dashboard`) accessible only with a valid token.
- MongoDB integration for user data storage.
- Custom error handling for clear responses.

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for user data storage.
- **JWT**: JSON Web Tokens for secure authentication.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: For managing environment variables.

## Setup Instructions

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

    ```bash
    MONGODB_URL=mongodb://localhost:27017/your-database-name
    SECRET_KEY=your-jwt-secret-key
    ```

    Replace `your-database-name` with the name of your MongoDB database and `your-jwt-secret-key` with a secret key for JWT signing.

### Running the Application

1. Start the application:

    ```bash
    npm start
    ```

2. The server will run on `http://127.0.0.1:3000`.

### API Endpoints

- `POST /api/v1/login`: Logs in a user and returns a JWT token.
    - Request body:
      ```json
      {
        "username": "your-username",
        "password": "your-password"
      }
      ```
    - Response:
      ```json
      {
        "message": {
          "username": "your-username",
          "tokens": "your-jwt-token"
        }
      }
      ```

- `GET /api/v1/dashboard`: Access the dashboard (requires a valid JWT token in the `Authorization` header).
    - Request headers:
      ```bash
      Authorization: Bearer your-jwt-token
      ```
    - Response:
      ```json
      {
        "message": "your-username"
      }
      ```

### Error Handling

The application uses a custom error handler to catch and return appropriate error messages.

