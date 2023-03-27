import type { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";
import { asyncDBWrapper } from "./asyncDBWrapper";

export const getAllUsers = async () => {
	return await asyncDBWrapper(() => prisma.user.findMany());
};

export const getUserById = async (userId: UserId) => {
	return await asyncDBWrapper(() =>
		prisma.user.findFirst({
			where: {
				id: userId,
			},
		})
	);
};

export const getUserByUsername = async (username: string) => {
	return await asyncDBWrapper(() =>
		prisma.user.findFirst({
			where: {
				username: username,
			},
		})
	);
};

export const createNewUser = async (user: Prisma.UserCreateInput) => {
	return await asyncDBWrapper(() =>
		prisma.user.create({
			data: {
				...user,
			},
		})
	);
};

export const updateUserById = async (
	userId: UserId,
	payload: Prisma.UserUpdateInput
) => {
	return await asyncDBWrapper(() =>
		prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				...payload,
			},
		})
	);
};

export const deleteUserById = async (userId: UserId) => {
	return await asyncDBWrapper(() =>
		prisma.user.delete({
			where: {
				id: userId,
			},
		})
	);
};
