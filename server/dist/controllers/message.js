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
exports.deleteMessageById = exports.updateMessageById = exports.addNewMessage = exports.getMessageById = exports.getAllMessages = void 0;
const db_1 = require("../utils/db");
const getAllMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: messages, error } = yield db_1.db.message.getAll();
    if (error)
        return next(error);
    return res.json(messages);
});
exports.getAllMessages = getAllMessages;
const getMessageById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = req.params.messageId;
    const { data: message, error } = yield db_1.db.message.getById(messageId);
    if (error)
        return next(error);
    if (!message)
        return res.status(404).json({ msg: "message not found" });
    return res.json(message);
});
exports.getMessageById = getMessageById;
const addNewMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: sanitize req.body
    const newMessageData = req.body;
    const { data: message, error } = yield db_1.db.message.create(newMessageData);
    if (error)
        return next(error);
    if (!message)
        return next(new Error("Couldn't create new message"));
    return res.status(201).json(message);
});
exports.addNewMessage = addNewMessage;
const updateMessageById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = req.params.messageId;
    const updatePayload = req.body;
    const { data: message, error } = yield db_1.db.message.updateById(messageId, updatePayload);
    if (error)
        return next(error);
    if (!message)
        return res.status(404).json({ msg: "Message not found" });
    return res.json(message);
});
exports.updateMessageById = updateMessageById;
const deleteMessageById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const messageId = req.params.messageId;
    const { data: message, error } = yield db_1.db.message.deleteById(messageId);
    if (error)
        return next(error);
    if (!message)
        return res.status(404).json({ msg: "Message not found" });
    return res.json({ msg: `${message.id} has been deleted successfully` });
});
exports.deleteMessageById = deleteMessageById;
//# sourceMappingURL=message.js.map