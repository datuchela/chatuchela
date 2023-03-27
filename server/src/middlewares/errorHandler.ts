import type { NextFunction, Request, Response } from "express";

export const errorLogger = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err);
	next(err);
};

export const clientErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	return res
		.status(500)
		.json({ error: true, msg: "Something went wrong on the server" });
};
