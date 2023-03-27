import { NextFunction, Request, Response } from "express";
import { db } from "../utils/db";

export const getAllMessages = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { data: messages, error } = await db.message.getAll();
	if (error) return next(error);
	return res.json(messages);
};

export const getMessageById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const messageId = req.params.messageId;
	const { data: message, error } = await db.message.getById(messageId);
	if (error) return next(error);
	if (!message) return res.status(404).json({ msg: "message not found" });
	return res.json(message);
};

export const addNewMessage = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// TODO: sanitize req.body
	const newMessageData = req.body;
	const { data: message, error } = await db.message.create(newMessageData);
	if (error) return next(error);
	if (!message) return next(new Error("Couldn't create new message"));
	return res.status(201).json(message);
};

export const updateMessageById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const messageId = req.params.messageId;
	const updatePayload = req.body;
	const { data: message, error } = await db.message.updateById(
		messageId,
		updatePayload
	);
	if (error) return next(error);
	if (!message) return res.status(404).json({ msg: "Message not found" });
	return res.json(message);
};

export const deleteMessageById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const messageId = req.params.messageId;
	const { data: message, error } = await db.message.deleteById(messageId);
	if (error) return next(error);
	if (!message) return res.status(404).json({ msg: "Message not found" });
	return res.json({ msg: `${message.id} has been deleted successfully` });
};
