# Mystical Triangle App

A full-stack numerology application that generates a "Mystical Triangle" from three input dates.

## Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: React (Create React App), CSS Modules
- **Numerology Logic**: Recursive reduction of dates to single digits and calculation of values A-R.

## Setup

### Prerequisites
- Node.js (v14+)
- npm

### Installation
1.  **Install Backend Dependencies**
    ```bash
    cd mystic-triangle-app/backend
    npm install
    ```

2.  **Install Frontend Dependencies**
    ```bash
    # (If not already installed via init)
    cd mystic-triangle-app/frontend
    npm install
    ```

## Development

1.  **Start Backend**
    ```bash
    cd mystic-triangle-app/backend
    npm run dev
    # Server running on http://localhost:5000
    ```

2.  **Start Frontend**
    ```bash
    cd mystic-triangle-app/frontend
    npm start
    # App running on http://localhost:3000
    ```

## Production Deployment

1.  **Backend**
    - Set environment variables in `.env` (check `.env.example`).
    - Run with PM2 or node:
      ```bash
      npm start
      ```
    - Use Nginx to reverse proxy `/api` requests to `localhost:5000`.

2.  **Frontend**
    - Build for production:
      ```bash
      npm run build
      ```
    - Serve the `build/` folder using Nginx, Apache, or a static host (Netlify/Vercel).

## API Reference
**POST** `/api/triangle`
- **Body**: `{ "dates": ["DD/MM/YYYY", "DD/MM/YYYY", "DD/MM/YYYY"] }`
- **Response**: JSON object with `breakdown`, `values` (A-R), `extras`, and `counts`.

