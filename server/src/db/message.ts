import type { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { asyncDBWrapper } from "./utils/asyncDBWrapper";

export const getAllMessages = async () => {
	return await asyncDBWrapper(() => prisma.message.findMany());
};

export const getMessagesByRoomId = async (roomId: RoomId) => {
	return await asyncDBWrapper(() =>
		prisma.message.findMany({
			where: {
				roomId: roomId,
			},
		})
	);
};

export const getMessageById = async (messageId: MessageId) => {
	return await asyncDBWrapper(() =>
		prisma.message.findFirst({
			where: {
				id: messageId,
			},
		})
	);
};

export const createNewMessage = async (message: {
	text: string;
	senderId: UserId;
	roomId: RoomId;
}) => {
	return await asyncDBWrapper(() =>
		prisma.message.create({
			data: {
				...message,
			},
		})
	);
};

export const updateMessageById = async (
	messageId: MessageId,
	payload: Prisma.MessageUpdateInput
) => {
	return await asyncDBWrapper(() =>
		prisma.message.update({
			where: {
				id: messageId,
			},
			data: {
				...payload,
			},
		})
	);
};

export const deleteMessageById = async (messageId: MessageId) => {
	return await asyncDBWrapper(() =>
		prisma.message.delete({
			where: {
				id: messageId,
			},
		})
	);
};
