import { NextFunction, Request, Response } from "express";
import { db } from "../db";

export const authenticate = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const username = req.body.username;
	if (username && typeof username === "string") {
		const { data: user, error } = await db.user.getByUsername(username);
		if (error) return next(error);
		if (!user) return res.status(404).json({ msg: "User not found" });
		return res.json(user);
	} else {
		return res.status(401).json({ msg: "invalid request" });
	}
};
