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
exports.deleteMessageById = exports.updateMessageById = exports.createNewMessage = exports.getMessageById = exports.getAllMessages = void 0;
const prisma_1 = require("../../prisma");
const asyncDBWrapper_1 = require("./asyncDBWrapper");
const getAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.message.findMany());
});
exports.getAllMessages = getAllMessages;
const getMessageById = (messageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.message.findFirst({
        where: {
            id: messageId,
        },
    }));
});
exports.getMessageById = getMessageById;
const createNewMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.message.create({
        data: Object.assign({}, message),
    }));
});
exports.createNewMessage = createNewMessage;
const updateMessageById = (messageId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.message.update({
        where: {
            id: messageId,
        },
        data: Object.assign({}, payload),
    }));
});
exports.updateMessageById = updateMessageById;
const deleteMessageById = (messageId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.message.delete({
        where: {
            id: messageId,
        },
    }));
});
exports.deleteMessageById = deleteMessageById;
//# sourceMappingURL=message.js.map