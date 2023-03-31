import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const getAllRooms = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.query.userId;
	if (userId && typeof userId === "string") {
		const { data: rooms, error } = await db.room.getByUserId(userId);
		if (error) return next(error);
		return res.json(rooms);
	}
	const { data: rooms, error } = await db.room.getAll();
	if (error) return next(error);
	return res.json(rooms);
};

export const getRoomById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const roomId = req.params.roomId;
	const { data: room, error } = await db.room.getById(roomId);
	if (error) return next(error);
	if (!room) return res.status(404).json({ msg: "room not found" });
	return res.json(room);
};

export const addNewRoom = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// TODO: sanitize req.body
	const newRoomData = req.body;
	const { data: room, error } = await db.room.create(newRoomData);
	if (error) return next(error);
	if (!room) return next(new Error("Couldn't create new room"));
	return res.status(201).json(room);
};

export const updateRoomById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const roomId = req.params.roomId;
	const updatePayload = req.body;
	const { data: room, error } = await db.room.updateById(roomId, updatePayload);
	if (error) return next(error);
	if (!room) return res.status(404).json({ msg: "Room not found" });
	return res.json(room);
};

export const addUserInRoom = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const roomId = req.params.roomId;
	const userId = req.body.userId;
	const { data: room, error } = await db.room.addUser(roomId, userId);
	if (error) return next(error);
	if (!room) return res.status(404).json({ msg: "Room not found" });
	return res.json(room);
};

export const deleteRoomById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const roomId = req.params.roomId;
	const { data: room, error } = await db.room.deleteById(roomId);
	if (error) return next(error);
	if (!room) return res.status(404).json({ msg: "Room not found" });
	return res.json({ msg: `${room.id} has been deleted successfully` });
};
