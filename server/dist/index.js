"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const roomRouter_1 = __importDefault(require("./routes/roomRouter"));
const messageRouter_1 = __importDefault(require("./routes/messageRouter"));
const errorHandler_1 = require("./middlewares/errorHandler");
const requestLogger_1 = require("./middlewares/requestLogger");
const auth_1 = require("./controllers/auth");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const corsConfig = {
    origin: "http://127.0.0.1:5173",
};
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// const io = new Server(server, {
// 	cors: {
// 		origin: "http://127.0.0.1:5173",
// 		methods: ["GET", "POST"],
// 	},
// });
// Pre-router middlewares
app.use((0, cors_1.default)(corsConfig));
app.use(express_1.default.json());
// Routes
app.use(requestLogger_1.requestLogger);
app.post("/api/auth", auth_1.authenticate);
app.use("/api/users?", userRouter_1.default);
app.use("/api/rooms?", roomRouter_1.default);
app.use("/api/messages?", messageRouter_1.default);
// Post-router middlewares
app.use(errorHandler_1.errorLogger);
app.use(errorHandler_1.clientErrorHandler);
// TODO: Implement socket.io
server.listen(PORT, () => {
    console.log("Listening on port 3000");
});
//# sourceMappingURL=index.js.map