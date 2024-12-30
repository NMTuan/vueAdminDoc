# User Guide

## Environment Setup

vueAdmin is developed based on vue3+vite5, and requires node.js >= 18 (it is recommended to use the latest LTS version).

## Project Initialization

```bash
# Create and enter the project directory
mkdir projectName
cd projectName

# Clone the project repository
git clone https://github.com/NMTuan/vueAdmin.git

# Install dependencies (supports npm/yarn/pnpm/bun)
npm install

# Start the development server
npm run dev
```

After the startup is successful, visit `http://localhost:5173` to see the vueAdmin management interface.

## Configure Backend Service

1. In the project root directory, rename (or copy) `.env.example` to `.env`
2. Change `VITE_API_BASE_URL` to your backend service address

vueAdmin requires the following basic authentication interfaces:

| Interface Name | Path | Description        |
| -------------- | ---- | ------------------ |
| Login          | `/auth/login`  | User login         |
| Logout         | `/auth/logout` | User logout        |
| Get User Info  | `/auth/info`   | Get current user info |

If your backend base address is http://localhost:3000/api/v1/, the complete interface paths are:

* http://localhost:3000/api/v1/auth/login
* http://localhost:3000/api/v1/auth/logout
* http://localhost:3000/api/v1/auth/info

For more detailed instructions:

* For interface specifications, please refer to the [Interface Agreement](/en/contract) section
* For environment configuration, please refer to the [System Configuration](/en/config) section

