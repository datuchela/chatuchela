# chatuchela

A simple web based chat application built on **WebSockets**, once message is sent to the server, it is persisted in the **PostgreSQL** database using **Prisma**.

## Run it locally

Clone this repo and follow the steps listed below in corresponding directories

### /server

1. locate `.env.example` in the `/server` directory, rename it into `.env` then open it and fill out the fields.
2. if this is the first time you are trying to run this, install dependencies first by running `npm install`
3. once you have installed dependencies run `npm run dev` this should spin up the server on `http://localhost:{PORT}` where {PORT} is whatever you have indicated in .env file.

### /client

1. install client-side dependencies first by running `npm install`
2. once you have installed dependencies run `npm run dev`, this should spin up a server on `http://127.0.0.1:5173/` and you are ready to go.  

## todo

- [ ] **authenticate** users with passwords using bcrypt for encryption.
- [ ] **Authorize** requests via JSON Web Tokens and Http-only cookies.
- [ ] Right now I am using **prop drilling** for my components to have their data, this approach forces me to have a particular code structure because of the uni-directional data flow, which I don't like. So the next step would be to use **Zustand** or **React Context**.
