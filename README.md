# FC Market

FC Market is a full-stack e-commerce demo application built with **React**, **Redux**, and **Express**. It features a product catalog, product detail pages, and a persistent shopping cart.

## Features

- 🛍️ Browse a catalog of products fetched from a REST API
- 🔍 View detailed information for each product
- 🛒 Add and remove items from a shopping cart
- 💾 Cart contents persist across page reloads via `localStorage`
- ⚡ Fast dev experience powered by Vite
- 🎨 Responsive UI built with React-Bootstrap

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React (Vite), React Router DOM, Redux, React-Redux, Redux-Thunk, React-Bootstrap, Axios, Font Awesome |
| Backend | Node.js, Express, Nodemon |

## Project Structure

```
FC-Market-React-Redux/
├── frontend/     # React + Redux client
└── backend/      # Express REST API
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Installation

Clone the repo and install dependencies for both the backend and frontend:

```bash
git clone https://github.com/<your-username>/FC-Market-React-Redux.git
cd FC-Market-React-Redux

cd backend && npm install
cd ../frontend && npm install
```

### Running Locally

The app requires **two servers running at the same time** — start the backend first.

**1. Start the backend** (from the project root):

```bash
cd backend
npm start
```

Runs the API at `http://localhost:8000`.

**2. Start the frontend** (in a new terminal, from the project root):

```bash
cd frontend
npm run dev
```

Runs the app at `http://localhost:5173` (Vite will use the next available port if this one is busy).

**3. Open the app**

Visit the URL printed in your terminal, e.g. `http://localhost:5173`.

## API Reference

| Method | Endpoint | Description |
|--------|-----------|--------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/:id` | Get a single product by ID |

## Roadmap

- [ ] User authentication
- [ ] Checkout flow
- [ ] Persist cart to a database instead of `localStorage`
- [ ] Product search and filtering
