"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoomById = exports.updateRoomById = exports.createNewRoom = exports.getRoomsByUserId = exports.getRoomById = exports.getAllRooms = void 0;
const prisma_1 = require("../../prisma");
const asyncDBWrapper_1 = require("./asyncDBWrapper");
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.findMany());
});
exports.getAllRooms = getAllRooms;
const getRoomById = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.findFirst({
        where: {
            id: roomId,
        },
    }));
});
exports.getRoomById = getRoomById;
const getRoomsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.findMany({
        where: {
            users: {
                some: {
                    id: {
                        equals: userId,
                    },
                },
            },
        },
    }));
});
exports.getRoomsByUserId = getRoomsByUserId;
const createNewRoom = (room) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.create({
        data: Object.assign({}, room),
    }));
});
exports.createNewRoom = createNewRoom;
const updateRoomById = (roomId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.update({
        where: {
            id: roomId,
        },
        data: Object.assign({}, payload),
    }));
});
exports.updateRoomById = updateRoomById;
const deleteRoomById = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.room.delete({
        where: {
            id: roomId,
        },
    }));
});
exports.deleteRoomById = deleteRoomById;
//# sourceMappingURL=room.js.map