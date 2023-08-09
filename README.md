

# nodejs-ecommerce-rest-api

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [User Management](#user-management)
- [Usage](#usage)
- [Contributing](#contributing)

## Description

This API project has been meticulously crafted to deliver a comprehensive E-Commerce management system, complete with robust user authentication capabilities. In addition to empowering users with secure registration and login functionalities, the system extends its prowess to encompass various key management aspects such as product management, order processing, and a fully-fledged shopping cart system. It allows users to register, log in, and perform various actions based on their roles. The project uses MongoDB for data storage and Mongoose for data modeling and validation.

## Features

- User registration and login using encrypted passwords.
- Token-based authentication for secure access to protected routes.
- User roles: regular users and admin users.
- Admin access to manage user accounts and view statistics.
- Aggregation pipeline to generate user statistics based on creation date.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- CryptoJS (for password encryption)

## Getting Started

### Installation


1. Install dependencies:
   ```
   npm install

### Configuration

1. Create a `.env` file in the root directory with the following content:
   ```
   MONGO_URL=your_mongodb_connection_url
   PSS_sec=your_cryptojs_password
   JWT_sec=your_jwt_secret
   PORT=5000
   

2. Replace `your_mongodb_connection_url`, `your_cryptojs_password`, and `your_jwt_secret` with your actual values.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user and receive an access token.

### User Management

- `PUT /api/user/:id`: Update a user's information.
- `DELETE /api/user/:id`: Delete a user account (admin only).
- `GET /api/user/find/:id`: Find a user's information (admin only).
- `GET /api/user/find/stats`: Get user statistics for the past year (admin only).
- And more Product, Order and Cart Management

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Access the API endpoints using a tool like Postman(I used Postman) or cURL.

3. Refer to the API endpoints section above for detailed endpoint usage.

## Contributing

Contributions are welcome! If you find issues or want to add new features, please create a pull request.


Feel free to customize this template according to your project's specific details, add more sections, and provide additional information.
