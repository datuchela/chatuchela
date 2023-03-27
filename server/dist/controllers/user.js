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
exports.deleteUserById = exports.updateUserById = exports.addNewUser = exports.getUserById = exports.getAllUsers = void 0;
const db_1 = require("../utils/db");
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.query.username;
    console.log("username", username);
    if (username && typeof username === "string") {
        const { data: user, error } = yield db_1.db.user.getByUsername(username);
        if (error)
            return next(error);
        return res.json(user);
    }
    const { data: users, error } = yield db_1.db.user.getAll();
    if (error)
        return next(error);
    return res.json(users);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const { data: user, error } = yield db_1.db.user.getById(userId);
    if (error)
        return next(error);
    if (!user)
        return res.status(404).json({ msg: "User not found" });
    return res.json(user);
});
exports.getUserById = getUserById;
const addNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: sanitize req.body
    const newUserData = req.body;
    const { data: user, error } = yield db_1.db.user.create(newUserData);
    if (error)
        return next(error);
    if (!user)
        return next(new Error("Couldn't create new user"));
    return res.status(201).json(user);
});
exports.addNewUser = addNewUser;
const updateUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const updatePayload = req.body;
    const { data: user, error } = yield db_1.db.user.updateById(userId, updatePayload);
    if (error)
        return next(error);
    if (!user)
        return res.status(404).json({ msg: "User not found" });
    return res.json(user);
});
exports.updateUserById = updateUserById;
const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const { data: user, error } = yield db_1.db.user.deleteById(userId);
    if (error)
        return next(error);
    if (!user)
        return res.status(404).json({ msg: "User not found" });
    return res.json({ msg: `${user.id} has been deleted successfully` });
});
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user.js.map