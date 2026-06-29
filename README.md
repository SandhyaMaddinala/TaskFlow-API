# TaskFlow API

## Overview

TaskFlow API is a RESTful backend application built with **Node.js** and **Express.js**. It provides CRUD operations to manage tasks.

## Features

* Get all tasks
* Create a new task
* Update an existing task
* Delete a task
* Custom security middleware
* CORS support
* Request logging with Morgan
* JSON request handling

## Technologies Used

* Node.js
* Express.js
* CORS
* Morgan

## Project Structure

```text
taskflow-api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── tests/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Installation

```bash
npm install
npm start
```

The server runs on:

```
http://localhost:5000
```
