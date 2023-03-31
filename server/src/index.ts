import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter";
import roomRouter from "./routes/roomRouter";
import messageRouter from "./routes/messageRouter";

import { db } from "./db";

import { clientErrorHandler, errorLogger } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/requestLogger";

import { authenticate } from "./controllers/auth";

dotenv.config();

// Constants
const PORT = process.env.PORT || 3000;
const corsConfig: cors.CorsOptions = {
	origin: "http://127.0.0.1:5173",
};

// Init servers
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "http://127.0.0.1:5173",
		methods: ["GET", "POST"],
	},
});

// Pre-router middlewares
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.use(requestLogger);
app.post("/api/auth", authenticate);

app.use("/api/users?", userRouter);
app.use("/api/rooms?", roomRouter);
app.use("/api/messages?", messageRouter);

// Post-router middlewares
app.use(errorLogger);
app.use(clientErrorHandler);

// WebSocket connections
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);
	socket.on("join-room", ({ roomId, userId }) => {
		socket.join(roomId);
		socket.in(roomId).emit("join-room", { roomId, userId });
	});
	socket.on("message", (msg: PrimitiveMessage) => {
		const { text, senderId, roomId } = msg;
		socket.in(msg.roomId).emit("message", msg);
		db.message.create({ text, senderId, roomId });
	});
});

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
