import {
	getAllUsers,
	getUserById,
	getUserByUsername,
	createNewUser,
	updateUserById,
	deleteUserById,
} from "./user";

import {
	addUserInRoom,
	createNewRoom,
	deleteRoomById,
	getAllRooms,
	getRoomById,
	getRoomsByUserId,
	removeUserFromGroup,
	updateRoomById,
} from "./room";

import {
	createNewMessage,
	deleteMessageById,
	getAllMessages,
	getMessageById,
	updateMessageById,
} from "./message";

export const db = {
	user: {
		getAll: getAllUsers,
		getById: getUserById,
		getByUsername: getUserByUsername,
		create: createNewUser,
		updateById: updateUserById,
		deleteById: deleteUserById,
	},
	room: {
		getAll: getAllRooms,
		getByUserId: getRoomsByUserId,
		getById: getRoomById,
		create: createNewRoom,
		updateById: updateRoomById,
		addUser: addUserInRoom,
		removeUser: removeUserFromGroup,
		deleteById: deleteRoomById,
	},
	message: {
		getAll: getAllMessages,
		getById: getMessageById,
		create: createNewMessage,
		updateById: updateMessageById,
		deleteById: deleteMessageById,
	},
};
