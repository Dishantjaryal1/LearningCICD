## ⚙️ CI/CD with GitHub Actions (Frontend + Backend Testing)

This project implements CI/CD using GitHub Actions to automatically run tests on both the frontend and backend before any code is merged to the main branch.
🔍 What It Does

    ✅ Automatically runs frontend tests using Vitest.

    ✅ Automatically runs backend tests using Jest or your preferred backend test runner.

    ✅ Executes on every push or pull request targeting the main branch.

    ✅ Ensures that no broken code is merged.

🛠️ CI/CD Workflow File

Path: .github/workflows/test.yml

name: CI - Frontend & Backend Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test-frontend:
    name: 🔧 Test Frontend
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: ./frontend

    steps:
      - name: ⬇️ Checkout code
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: 📦 Install dependencies
        run: npm ci

      - name: 🧪 Run frontend tests
        run: npm test

  test-backend:
    name: 🔧 Test Backend
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: ./backend

    steps:
      - name: ⬇️ Checkout code
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: 📦 Install dependencies
        run: npm ci

      - name: 🧪 Run backend tests
        run: npm test

📁 Project Structure (Imagify MERN)

```
imagify/
├── backend/
│   ├── ... (Express, MongoDB, Jest tests)
│   └── package.json
│
├── frontend/
│   ├── ... (React + Vite, Vitest tests)
│   └── package.json
│
└── .github/
    └── workflows/
        └── test.yml
```

✅ Requirements

Ensure each app has its own test script:
frontend/package.json

"scripts": {
  "test": "vitest"
}

backend/package.json

"scripts": {
  "test": "jest"
}

    You can replace jest with mocha, supertest, or any backend testing framework you're using.

🧪 Result

This setup ensures every PR or push to main is verified through a robust CI pipeline. If tests fail, merging is blocked — maintaining a stable and tested main branch.
