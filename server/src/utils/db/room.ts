import type { Prisma } from "@prisma/client";
import { prisma } from "../../prisma";
import { asyncDBWrapper } from "./asyncDBWrapper";

export const getAllRooms = async () => {
	return await asyncDBWrapper(() => prisma.room.findMany());
};

export const getRoomById = async (roomId: RoomId) => {
	return await asyncDBWrapper(() =>
		prisma.room.findFirst({
			where: {
				id: roomId,
			},
			include: {
				messages: {
					take: 20,
					orderBy: {
						createdAt: "asc",
					},
					include: {
						from: {
							select: {
								username: true,
							},
						},
					},
				},
			},
		})
	);
};

export const getRoomsByUserId = async (userId: UserId) => {
	return await asyncDBWrapper(() =>
		prisma.room.findMany({
			where: {
				users: {
					some: {
						id: {
							equals: userId,
						},
					},
				},
			},
		})
	);
};

export const createNewRoom = async (room: Prisma.RoomCreateInput) => {
	return await asyncDBWrapper(() =>
		prisma.room.create({
			data: {
				...room,
			},
		})
	);
};

export const updateRoomById = async (
	roomId: RoomId,
	payload: Prisma.RoomUpdateInput
) => {
	return await asyncDBWrapper(() =>
		prisma.room.update({
			where: {
				id: roomId,
			},
			data: {
				...payload,
			},
		})
	);
};

export const addUserInRoom = async (roomId: RoomId, userId: UserId) => {
	return await asyncDBWrapper(() =>
		prisma.room.update({
			where: {
				id: roomId,
			},
			data: {
				users: {
					connect: {
						id: userId,
					},
				},
			},
		})
	);
};

export const removeUserFromGroup = async (roomId: RoomId, userId: UserId) => {
	return await asyncDBWrapper(() =>
		prisma.room.update({
			where: {
				id: roomId,
			},
			data: {
				users: {
					disconnect: {
						id: userId,
					},
				},
			},
		})
	);
};

export const deleteRoomById = async (roomId: RoomId) => {
	return await asyncDBWrapper(() =>
		prisma.room.delete({
			where: {
				id: roomId,
			},
		})
	);
};
