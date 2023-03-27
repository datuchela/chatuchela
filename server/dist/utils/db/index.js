"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const user_1 = require("./user");
const room_1 = require("./room");
const message_1 = require("./message");
exports.db = {
    user: {
        getAll: user_1.getAllUsers,
        getById: user_1.getUserById,
        getByUsername: user_1.getUserByUsername,
        create: user_1.createNewUser,
        updateById: user_1.updateUserById,
        deleteById: user_1.deleteUserById,
    },
    room: {
        getAll: room_1.getAllRooms,
        getByUserId: room_1.getRoomsByUserId,
        getById: room_1.getRoomById,
        create: room_1.createNewRoom,
        updateById: room_1.updateRoomById,
        deleteById: room_1.deleteRoomById,
    },
    message: {
        getAll: message_1.getAllMessages,
        getById: message_1.getMessageById,
        create: message_1.createNewMessage,
        updateById: message_1.updateMessageById,
        deleteById: message_1.deleteMessageById,
    },
};
//# sourceMappingURL=index.js.map