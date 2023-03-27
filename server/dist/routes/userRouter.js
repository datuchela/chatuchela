"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.route("/").get(user_1.getAllUsers).post(user_1.addNewUser);
router
    .route("/:userId")
    .get(user_1.getUserById)
    .patch(user_1.updateUserById)
    .delete(user_1.deleteUserById);
exports.default = router;
//# sourceMappingURL=userRouter.js.map