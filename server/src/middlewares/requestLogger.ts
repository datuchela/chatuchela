import { NextFunction, Request, Response } from "express";

export const requestLogger = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(`request on: ${req.url}`);
	next();
};
