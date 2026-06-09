# Support CRM

A full-stack Customer Support Ticket Management System built using React, Node.js, Express, and MongoDB.

This application allows support team to create, manage, search, filter, and update customer support tickets efficiently through an dashboard.

## Features

* Create support tickets
* Generate unique Ticket IDs (e.g., TKT-001)
* View all tickets
* Search tickets by:

  * Ticket ID
  * Customer Name
  * Customer Email
  * Subject
* Filter tickets by status

  * Open
  * In Progress
  * Closed
* View detailed ticket information
* Update ticket status
* Add notes/comments to tickets
* Track ticket history
* Responsive UI using Tailwind CSS
* MongoDB database integration

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* dotenv

---

## Project Structure

```bash
support-crm/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
└── README.md
```

---

## API Endpoints

### Create Ticket

```http
POST /api/tickets/createTicket
```

Request Body:

```json
{
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "subject": "Login Issue",
  "description": "Unable to login to account"
}
```

---

### Get All Tickets

```http
GET /api/tickets/getAllTickets
```

Optional Query Parameters:

```http
GET /api/tickets/getAllTickets?search=john&status=Open
```

---

### Get Ticket By ID

```http
GET /api/tickets/:ticketID
```

Example:

```http
GET /api/tickets/TKT-001
```

---

### Update Ticket

```http
PUT /api/tickets/:ticketID
```

Request Body:

```json
{
  "status": "In Progress",
  "note": "Customer contacted via email"
}
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/05Anuja/support-crm.git
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Run Backend:

```bash
npm run server
```

Backend runs on:

```bash
http://localhost:8000
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:8000/api/tickets
```

Run Frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Future Improvements

* Authentication & Authorization
* Admin/User Roles
* Email Notifications
* Ticket Assignment
* Dashboard Analytics
* Pagination
* Toast Notifications

---

## Author

Anuja Pawar

Frontend & Full Stack Developer

GitHub: https://github.com/05Anuja