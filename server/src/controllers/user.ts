import type { NextFunction, Request, Response } from "express";
import { db } from "../utils/db";

export const getAllUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const username = req.query.username;
	if (username && typeof username === "string") {
		const { data: user, error } = await db.user.getByUsername(username);
		if (error) return next(error);
		return res.json(user);
	}
	const { data: users, error } = await db.user.getAll();
	if (error) return next(error);
	return res.json(users);
};

export const getUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.params.userId;
	const { data: user, error } = await db.user.getById(userId);
	if (error) return next(error);
	if (!user) return res.status(404).json({ msg: "User not found" });
	return res.json(user);
};

export const addNewUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// TODO: sanitize req.body
	const newUserData = req.body;
	const { data: user, error } = await db.user.create(newUserData);
	if (error) return next(error);
	if (!user) return next(new Error("Couldn't create new user"));
	return res.status(201).json(user);
};

export const updateUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.params.userId;
	const updatePayload = req.body;
	const { data: user, error } = await db.user.updateById(userId, updatePayload);
	if (error) return next(error);
	if (!user) return res.status(404).json({ msg: "User not found" });
	return res.json(user);
};

export const deleteUserById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const userId = req.params.userId;
	const { data: user, error } = await db.user.deleteById(userId);
	if (error) return next(error);
	if (!user) return res.status(404).json({ msg: "User not found" });
	return res.json({ msg: `${user.id} has been deleted successfully` });
};
