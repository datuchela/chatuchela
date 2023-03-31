# chatuchela-server

**Server side** of a simple web based chat application built on **WebSockets**, once message is sent to the server, it is persisted in the **PostgreSQL** database using **Prisma**.

## Run the server locally

1. locate `.env.example` in the `/server` directory, rename it into `.env` then open it and fill out the fields.
2. if this is the first time you are trying to run this, install dependencies first by running `npm install`
3. once you have installed dependencies run `npm run dev` this should spin up the server on `http://localhost:{PORT}` where {PORT} is whatever you have indicated in .env file.
