# chatuchela
A simple web based chat application built on **WebSockets**, once message is sent to the server, it is persisted in the **PostgreSQL** database using **Prisma**.

## todo
- [ ] **authenticate** users with passwords using bcrypt for encryption.
- [ ] **Authorize** requests via JSON Web Tokens and Http-only cookies.
- [ ] Right now I am using **prop drilling** for my components to have their data, this approach forces me to have a particular code structure because of the uni-directional data flow, which I don't like. So the next step would be to use **Zustand** or **React Context**.
