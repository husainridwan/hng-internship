# CRUD API Documentation

This documentation provides details on how to use the CRUD (Create, Read, Update, Delete) endpoints for the Person API for managing persons. This API allows you to perform various CRUD operations on a person resource.

## API Endpoints
- **baseurl**: https://localhost:5000

## Get all Persons

- **Endpoint**: GET {{baseurl}}/api
- **Request Body**: Body of request is empty
- **Response**: Returns all students in the database with a status code of 200 (Created).

## Get one Person by name

- **Endpoint**: GET {{baseurl}}/api/name
- **Request Body**: Body of request is empty
- **Response**: Returns student information with status code 200 if in database, else an error message with status code 404.


## Create a new Person

- **Endpoint**: POST {{baseurl}}/api
- **Request Body**: JSON object containing person details (name, track).
- **Response**: Returns the created person with a status code of 200.

## Update a Person details by name

- **Endpoint**: PUT {{baseurl}}/api/name.
- **Request Body**: JSON object containing updated person details.
- **Response**: Returns updated person information with status code 200 if name exists in database, else an error message with status code 404.

## Delete a Person details by name

- **Endpoint**: DELETE {{baseurl}}/api/name.
- **Request Body**: Body of request is empty
- **Response**: Returns deleted person details with status code 200 if name exists in database, else an error message with status code 404.

## How To Test Automatically

- Import the POSTMAN collection.
- Click on the dropdown of the collection and then click on generate tests.
- locate run collection on the top right corner of POSTMAN