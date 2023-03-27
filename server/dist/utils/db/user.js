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
exports.deleteUserById = exports.updateUserById = exports.createNewUser = exports.getUserByUsername = exports.getUserById = exports.getAllUsers = void 0;
const prisma_1 = require("../../prisma");
const asyncDBWrapper_1 = require("./asyncDBWrapper");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.findMany());
});
exports.getAllUsers = getAllUsers;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.findFirst({
        where: {
            id: userId,
        },
    }));
});
exports.getUserById = getUserById;
const getUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.findFirst({
        where: {
            username: username,
        },
    }));
});
exports.getUserByUsername = getUserByUsername;
const createNewUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.create({
        data: Object.assign({}, user),
    }));
});
exports.createNewUser = createNewUser;
const updateUserById = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.update({
        where: {
            id: userId,
        },
        data: Object.assign({}, payload),
    }));
});
exports.updateUserById = updateUserById;
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, asyncDBWrapper_1.asyncDBWrapper)(() => prisma_1.prisma.user.delete({
        where: {
            id: userId,
        },
    }));
});
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.js.map