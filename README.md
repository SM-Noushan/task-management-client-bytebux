# Task Management App

## Overview

This project is a task management application that allows users to manage tasks effectively. It provides features for listing tasks, adding new tasks, editing existing tasks, deleting tasks, and marking tasks as completed or not completed. The application is designed to be responsive, ensuring usability on both desktop and mobile devices.

- [Live-Site](https://task-management-bytebux.vercel.app)
- [Server-Repo](https://github.com/SM-Noushan/task-management-server-bytebux)

## Features

### Task List Page

- Displays a list of tasks.
- Each task shows a title, description, and status (completed or not).
- Users can add new tasks.
- Users can edit existing tasks.
- Users can delete tasks.
- Users can mark tasks as completed or not completed.

### Add/Edit Task Form

- Provides a form for adding a new task or editing an existing task.
- Includes fields for title and description.
- Includes a checkbox or toggle for marking the task as completed.

### Responsiveness

- The application is fully responsive and usable on both desktop and mobile devices.

## Technologies Used in this Project

- ReactJS
- TailwindCSS
- MongoDB (Server Side)
- Express.js (Server Side)

## Setup

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS version recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SM-Noushan/task-management-client-bytebux
   cd task-management-client-bytebux
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Environment Setup

1. Create a `.env.local` file in the root directory of the project and add the following environment variables:

   ```dotenv
   VITE_API_URL = http://localhost:8000/api
   ```

## Running the Project

1. To run the project locally, use the following command:

   ```bash
   npm run dev
   ```

This will start the server and make your application accessible at `http://localhost:5173` (or your specified port).

## API Documentation

### Endpoints

- `GET /tasks`: Retrieves a list of tasks.
- `GET /tasks/:id`: Retrieves a specific task by ID.
- `POST /tasks`: Creates a new task.
- `PUT /tasks/:id`: Updates an existing task by ID.
- `DELETE /tasks/:id`: Deletes a task by ID.

<br/>
<details>
    <summary>Thank you!</summary>
</details>
