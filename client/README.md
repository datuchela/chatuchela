# chatuchela-client

**Client side** of a simple web based chat application built on **WebSockets**, once message is sent to the server, it is persisted in the **PostgreSQL** database using **Prisma**.

## Run the client server locally

Make sure you have the backend server set up and running already before you do this, otherwise the web app just won't function.

1. install client-side dependencies first by running `npm install`
2. once you have installed dependencies run `npm run dev`, this should spin up a server on `http://127.0.0.1:5173/` and you are ready to go.
