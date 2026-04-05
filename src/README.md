# api-service/README.md

# API Service
================

## Overview
-----------

This is a Python-based API service that provides a RESTful interface for interacting with a database.

## Requirements
------------

* Python 3.8+
* Flask
* Flask-SQLAlchemy
* Flask-JWT-Extended

## Installation
------------

To install the required dependencies, run the following command:

```bash
pip install -r requirements.txt
```

## Running the Service
----------------------

To run the service, execute the following command:

```bash
python app.py
```

## API Endpoints
--------------

### Users

* `GET /users`: Retrieves a list of all users
* `POST /users`: Creates a new user
* `GET /users/<int:user_id>`: Retrieves a user by ID
* `PUT /users/<int:user_id>`: Updates a user
* `DELETE /users/<int:user_id>`: Deletes a user

### Products

* `GET /products`: Retrieves a list of all products
* `POST /products`: Creates a new product
* `GET /products/<int:product_id>`: Retrieves a product by ID
* `PUT /products/<int:product_id>`: Updates a product
* `DELETE /products/<int:product_id>`: Deletes a product

## API Documentation
-------------------

API documentation can be found at [http://localhost:5000/docs](http://localhost:5000/docs)

## Contributing
------------

Contributions are welcome! Please submit a pull request or issue to report any bugs or suggest new features.

## License
-------

This project is licensed under the MIT License.