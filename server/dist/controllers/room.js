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
exports.deleteRoomById = exports.updateRoomById = exports.addNewRoom = exports.getRoomById = exports.getAllRooms = void 0;
const db_1 = require("../utils/db");
const getAllRooms = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    debugger;
    console.log("hello world");
    const userId = req.query.userId;
    if (userId && typeof userId === "string") {
        const { data: rooms, error } = yield db_1.db.room.getByUserId(userId);
        if (error)
            return next(error);
        return res.json(rooms);
    }
    const { data: rooms, error } = yield db_1.db.room.getAll();
    if (error)
        return next(error);
    return res.json(rooms);
});
exports.getAllRooms = getAllRooms;
const getRoomById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.roomId;
    const { data: room, error } = yield db_1.db.room.getById(roomId);
    if (error)
        return next(error);
    if (!room)
        return res.status(404).json({ msg: "room not found" });
    return res.json(room);
});
exports.getRoomById = getRoomById;
const addNewRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: sanitize req.body
    const newRoomData = req.body;
    const { data: room, error } = yield db_1.db.room.create(newRoomData);
    if (error)
        return next(error);
    if (!room)
        return next(new Error("Couldn't create new room"));
    return res.status(201).json(room);
});
exports.addNewRoom = addNewRoom;
const updateRoomById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.roomId;
    const updatePayload = req.body;
    const { data: room, error } = yield db_1.db.room.updateById(roomId, updatePayload);
    if (error)
        return next(error);
    if (!room)
        return res.status(404).json({ msg: "Room not found" });
    return res.json(room);
});
exports.updateRoomById = updateRoomById;
const deleteRoomById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.roomId;
    const { data: room, error } = yield db_1.db.room.deleteById(roomId);
    if (error)
        return next(error);
    if (!room)
        return res.status(404).json({ msg: "Room not found" });
    return res.json({ msg: `${room.id} has been deleted successfully` });
});
exports.deleteRoomById = deleteRoomById;
//# sourceMappingURL=room.js.map