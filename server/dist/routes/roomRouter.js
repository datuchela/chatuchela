"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const room_1 = require("../controllers/room");
const router = express_1.default.Router();
router.route("/").get(room_1.getAllRooms).post(room_1.addNewRoom);
router
    .route("/:roomId")
    .get(room_1.getRoomById)
    .patch(room_1.updateRoomById)
    .delete(room_1.deleteRoomById);
exports.default = router;
//# sourceMappingURL=roomRouter.js.map