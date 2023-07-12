# GDX Product Manager

## Fullstack Overview

The Store App is a full-stack application designed to facilitate the management of products for a store. It provides a user-friendly interface for performing various product-related operations, including adding, deleting, updating, viewing, and listing all products. The app consists of both a frontend and a backend, working together to deliver a seamless user experience.

## Key Features

- Add Product: Allow users to add new products to the store's inventory. Users can provide essential product details such as name, description, color, size, and other relevant attributes. The app validates the input and stores the product information securely in the database.

- Delete Product: Enable users to remove products from the store's inventory. By selecting a specific product, users can initiate the deletion process. The app removes the product from the database, ensuring accurate inventory management.

- Update Product: Enable user smodify existing product information. Users can access the product details and make necessary updates, such as changing the name, description, color, size, or any other attributes. The app ensures that the changes are accurately reflected in the database.

- View Product: Provides a dedicated page for users to view detailed information about a specific product. Users can access product details, including its name, description, color, size, and other relevant attributes.

- View All Products: Offers a comprehensive listing of all available products in the store. Users can browse through the product catalog, view essential details.

## Frameworks Used

### Backend

- `django<=3.2.4,<3.3`
- `djangorestframework<=3.12.4,<3.13`
- `flake8>=3.9.2,<=3.10`
- `psycopg2>=2.8.6,<2.9`
- `drf-spectacular>=0.21.1,<0.23`
- `django-cors-headers`

### Frontend

- `NPM 9.6.5`
- `Node V20.3.1`
- `react-router-dom@6.14.1`
- `Material UI: @mui/material@5.14.0`
- `Axios: axios@1.4.0`

## Installation Instruction/Instruction for Use
### Download the project folder (`GDX-product-manager`)
### Ensure that you have VSCode installed in your local machine
### Navigate to the project folder and open the folder in VSCode editor by executing the command:
    code .



Describe the feature's purpose and functionality.
Explain the user flow and any specific requirements.
Provide any relevant screenshots or diagrams.
Delete Product

Describe the feature's purpose and functionality.
Explain the user flow and any specific requirements.
Provide any relevant screenshots or diagrams.
Update Product

Describe the feature's purpose and functionality.
Explain the user flow and any specific requirements.
Provide any relevant screenshots or diagrams.
View Product

Describe the feature's purpose and functionality.
Explain the user flow and any specific requirements.
Provide any relevant screenshots or diagrams.
View All Products

Describe the feature's purpose and functionality.
Explain the user flow and any specific requirements.
Provide any relevant screenshots or diagrams.
Frontend Technologies Used
List the frontend technologies/frameworks/languages used (e.g., React, Angular, Vue.js).
Backend
Features
Add Product

Describe the feature's purpose and functionality.
Explain any validation or data processing logic involved.
Provide any relevant code snippets or API documentation.
Delete Product

Describe the feature's purpose and functionality.
Explain any validation or data processing logic involved.
Provide any relevant code snippets or API documentation.
Update Product

Describe the feature's purpose and functionality.
Explain any validation or data processing logic involved.
Provide any relevant code snippets or API documentation.
View Product

Describe the feature's purpose and functionality.
Explain any filtering or querying capabilities.
Provide any relevant code snippets or API documentation.
View All Products

Describe the feature's purpose and functionality.
Explain any sorting or pagination options.
Provide any relevant code snippets or API documentation.
Backend Technologies Used
List the backend technologies/frameworks/languages used (e.g., Node.js, Express, Django, Flask).
Database
Describe the database used in the application (e.g., MySQL, PostgreSQL, MongoDB).
Explain the database schema, tables/collections, and their relationships.
Document any specific queries or data manipulation operations.
APIs
List all the API endpoints and their corresponding functionality.
Provide details about each endpoint, including the request/response formats, authentication/authorization requirements, and any relevant parameters.
Include code examples or API documentation for each endpoint.
Deployment
Describe the steps required to deploy the application to a production environment.
Explain any additional configurations or considerations for deployment.
Include details about hosting platforms, server setup, and continuous integration/deployment (CI/CD) pipelines.
Troubleshooting and Support
Provide common troubleshooting tips and solutions for known issues.
Include links to relevant resources, such as FAQs, forums, or support channels.
Specify any support policies or contact information for users seeking assistance.
Future Enhancements
Discuss any planned or potential future enhancements for the application.
List new features, improvements, or optimizations that could be considered.
Conclusion
Summarize the key points covered in the documentation.
Provide any final remarks or acknowledgments.
Remember, this is a general structure, and you can customize it based on the specific requirements and structure of your full-stack app. The goal is to provide comprehensive documentation that helps users understand the app's functionality and guides them through installation, usage, and troubleshooting.


## Marking Criteria

- Functionality: The solution works as expected and meets the acceptance criteria.
- Coding style and standards: The code is easy to read, uses proper indentation and is well commented (including updating the included README.md file).


## Plagiarism  - !PLEASE NOTE!

It is acceptable to refer to resources online and get assistance there. Yes! We all use the web from time to time to make it work, and we are okay with this. However, the work you submit must be your own. A library or framework here, and code inclusion there with a reference to where it came from, is totally acceptable. But the work you submit must be your own.


## Submission - !IMPORTANT!

Please include all relevant information in the provided README.md file, including things such as:
- frameworks used
- software versions (such as NPM, React, etc.)
- instructions for use
- any additional information as required

Please complete your submission as indicated in the instructions in the email.


## System Requirements

Minimum local machine requirements for this technical test are:
- A personal computer (Linux, Windows, MAC)
- 64-bit processor and 4 GB RAM
- Administrative access
- Internet access


## The Assignment

> As a store owner, I want to be able to create a product listing so that I can easily manage all of my products.

You will create a basic full-stack application in a single docker-compose.yaml with the following services:
- db (can be MariaDB, MySQL or PostgreSQL)
- api (written in python)
- frontend (using the React framework)

For a sample docker-compose.yaml, please visit [the official compose site on docker.com](https://docs.docker.com/compose/).

You are free to use any additional frameworks or libraries as desired, as long as they are documented in the provided README.md file.


### The Product Model

Each product should have the following fields:
- Product name (text)
- Product ID (number)
- Product description (text area)
- Product colour (text)
- Product size (small, medium or large)


### Backend/API

The backend/api should store the model for the Products, should provide a RESTful API for the frontend, and should handle the logic between the API and the model.

The API should receive and output data in the JSON format, and should be able to handle the functionality as outlined and required by the Frontend below.

You are encouraged to use any frameworks that simplify development for this assignment, and document which ones you used in the README.md file.

Assume that all requests coming to the API are authorized, so adding any security mechanisms on the API calls themselves is out of scope for this assignment.


### Frontend

The frontend will have 5 separate functionality pieces that will need to be added. Ideally you will use something like Material-UI to ease component creation, but you will not be marked on how visually appealing your solution is, just the functionality as outlined below.


#### View products

This page should show all products that have been entered in a table format (each product is a row).

Minimum details that should show for each product in this view are (feel free to add more fields in this view if desired):
- Product ID
- Product Name

Each product should also have a way to "click" the product and proceed to the view product page. This can be done by linking the product name to the view page, or by having separate buttons for actions such as Delete and Update.


#### Add product

The Add Product page should provide a form to input data for the product using the fields as described above:
- Product name (text)
- Product ID (number)
- Product description (text area)
- Product colour (text)
- Product size (small, medium or large)

There should also be a "Save" button. When the user saves the new product, the following should occur:
- the new product gets sent over the API to the backend, where it gets saved to the DB
- the user is alerted that save was successful
- the user is redirected after the successful save, either to the product listing page, or to the view page for the product that they just added


#### View product

The View Product page should read from the API and show the data for every field for a single product. There should be buttons or links to "Update" and "Delete" the current product.


#### Update product

The Update Product interface should be very similar to the Add Product one, where the form fields are pre-populated with the product data.

When the user updates the product, the following should occur:
- the updated product gets sent over the API to the backend, where the *existing* product gets updated in the DB
- the user is alerted that the update was successful
- the user is redirected after the successful update, either to the product listing page, or to the view page for the product that they just updated (should be consistent behaviour with Add Product)


#### Delete Product

When the user deletes the product, the following should occur:
- the delete request gets sent over the API to the backend, where it gets removed from the DB
- the user is alerted that delete was successful
- the user is redirected after the successful delete to the product listing page