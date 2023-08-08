# Ecommerce-api
Ecommerce Platform Admin API
This project is an API built using Node.js and MongoDB that serves as the backend for an ecommerce platform's admin to manage product inventory. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on product data stored in the MongoDB database. Users can add new products, retrieve product information, delete products, and update the quantity of products.

Features
Add a new product to the database.
Retrieve a list of all products.
Delete a product by its ID.
Update the quantity of a product by its ID.
Tech Stack
Node.js
Express.js
MongoDB
Mongoose (ODM - Object Data Modeling for MongoDB)
Prerequisites
Before running the API, make sure you have the following installed:

Node.js
MongoDB (or MongoDB Atlas account)
Setup
Clone the repository to your local machine:

bash
Copy code
git clone <repository_url>
Navigate to the project directory:

bash
Copy code
cd <project_folder>
Install dependencies using npm:

bash
Copy code
npm install
Create a .env file in the root directory and set the following environment variables:

env
Copy code
PORT=<port_number>
MONGODB_URI=<your_mongodb_connection_string>
Replace <port_number> with the desired port number for the API server (e.g., 3000), and <your_mongodb_connection_string> with the MongoDB connection string. If you are using MongoDB Atlas, obtain the connection string from your Atlas dashboard.

Start the API server:

bash
Copy code
npm start
The server will be running at http://localhost:<port_number>.

API Endpoints
1. Add Product
URL: POST /products/create
Request Body
json
Copy code
{
  "name": "Product Name",
  "quantity": 10
}
Response (Success)
json
Copy code
{
  "success": true,
  "message": "Product added successfully!",
  "data": {
    "_id": "product_id",
    "name": "Product Name",
    "quantity": 10
  }
}
Response (Error)
json
Copy code
{
  "success": false,
  "message": "Error adding product to the database",
  "error": "Error message"
}
2. Get All Products
URL: GET /products
Response (Success)
json
Copy code
[
  {
    "_id": "product_id_1",
    "name": "Product 1",
    "quantity": 5
  },
  {
    "_id": "product_id_2",
    "name": "Product 2",
    "quantity": 15
  },
  // More products...
]
Response (Error)
json
Copy code
{
  "success": false,
  "message": "Error fetching products",
  "error": "Error message"
}
3. Delete Product
URL: DELETE /products/:id
Response (Success)
json
Copy code
{
  "success": true,
  "message": "Product deleted successfully!"
}
Response (Error)
json
Copy code
{
  "success": false,
  "message": "Error deleting product",
  "error": "Error message"
}
4. Update Product Quantity
URL: POST /products/:id/update_quantity/?number=10
Response (Success)
json
Copy code
{
  "success": true,
  "message": "Quantity updated successfully!",
  "data": {
    "_id": "product_id",
    "name": "Product Name",
    "quantity": 20
  }
}
Response (Error)
json
Copy code
{
  "success": false,
  "message": "Error updating quantity",
  "error": "Error message"
}
Error Handling
The API provides appropriate error handling for different scenarios. For any failed request, the API will respond with a meaningful error message and the corresponding HTTP status code.

Scaling and Extensibility
The project's folder structure follows a scalable approach with separate directories for models, controllers, and routes. This makes it easy to extend the API with new features and maintain clean code organization.

Contributions
Contributions to the project are welcome! If you'd like to contribute, feel free to submit a pull request. Please ensure the code follows the established coding conventions and includes relevant tests.

License
This project is licensed under the MIT License.

