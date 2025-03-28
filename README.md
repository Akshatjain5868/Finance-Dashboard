# Finance-Dashboard
# Finance Dashboard

## Overview
The **Finance Dashboard** is a full-stack MERN application designed to provide insights into key financial metrics, product data, and transaction records. It leverages **MongoDB, Express.js, React.js, and Node.js** to create a responsive and interactive financial analytics dashboard.

## Features
- 📊 **KPI Tracking**: Monitor key financial performance indicators.
- 🛒 **Product Data Management**: View and analyze product-related financial data.
- 💰 **Transaction History**: Keep track of past transactions with detailed records.
- 🔄 **REST API**: Built with Express.js and MongoDB for handling financial data.
- 🎨 **Interactive UI**: Built using React with Redux Toolkit Query for state management.

## Tech Stack
- **Frontend**: React.js, Redux Toolkit, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB (Mongoose ORM)
- **State Management**: Redux Toolkit Query
- **Styling**: Tailwind CSS (optional)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Git** (optional, for cloning the repository)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Akshatjain5868/Finance-Dashboard.git
cd Finance-Dashboard
```

### 2️⃣ Setup Backend
```sh
cd server
npm install
```

Create a `.env` file inside the `server` directory and add:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Start the server:
```sh
npm run dev
```

### 3️⃣ Setup Frontend
```sh
cd client
npm install
```

Create a `.env` file inside the `client` directory and add:
```env
VITE_BASE_URL=http://localhost:5000
```

Start the React app:
```sh
npm run dev
```

## API Endpoints
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| GET    | `/kpi/kpis/`     | Fetch KPIs |
| GET    | `/product/products/` | Fetch Products |
| GET    | `/transaction/transactions/` | Fetch Transactions |

## Usage
- Visit `http://localhost:5173` (or the assigned port) to access the frontend dashboard.
- The backend runs on `http://localhost:5000`.
- MongoDB is used to store all financial data.

## Contributing
Feel free to fork this repository and submit pull requests with improvements or feature additions!

## License
This project is **MIT Licensed**.

---
Made with ❤️ by **Akshat Jain**


