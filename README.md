# Flave Full-Stack Developer Challenge

Objective: Make a front-end webapp that interacts with an API which utilizes a database

## Pre-requistes

- Install docker
- Use Linux/MacOS Terminal or WSL or git-bash terminal on Windows

## Instructions

### Creating the Webapp

- Make a page that allows users to login
- Make a page that will list their grocery list of which can be added to, removed from and edited
- Add a logout button to end session

### Creating the REST API

- Write the API with node and expressJS
- Write following endpoints:
  - `POST` login (username, password)
  - `GET` groceries (username)
  - `POST` grocery (username, grocery_name)
  - `DELETE` grocery (username, grocery_name)
  - `PUT` grocery (username, old_grocery_name, new_grocery_name)

### Creating the Database

- Implement the Database with Postgres
- Store a User table with needed properties
- Think of a way to protect the User tables password property
- Store a Grocery table with needed properties
- Create any other tables deemed needed

## Commands

### Starting up

```bash
docker-compose up
```
