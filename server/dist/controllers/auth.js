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
exports.authenticate = void 0;
const db_1 = require("../utils/db");
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    if (username && typeof username === "string") {
        const { data: user, error } = yield db_1.db.user.getByUsername(username);
        if (error)
            return next(error);
        if (!user)
            return res.status(404).json({ msg: "User not found" });
        return res.json(user);
    }
    else {
        return res.status(401).json({ msg: "invalid request" });
    }
});
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map