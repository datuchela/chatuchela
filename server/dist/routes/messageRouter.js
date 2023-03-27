"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const message_1 = require("../controllers/message");
const router = express_1.default.Router();
router.route("/").get(message_1.getAllMessages).post(message_1.addNewMessage);
router
    .route("/:messageId")
    .get(message_1.getMessageById)
    .patch(message_1.updateMessageById)
    .delete(message_1.deleteMessageById);
exports.default = router;
//# sourceMappingURL=messageRouter.js.map