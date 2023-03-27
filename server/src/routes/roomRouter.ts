import express from "express";
import {
	addNewRoom,
	getAllRooms,
	getRoomById,
	updateRoomById,
	deleteRoomById,
	addUserInRoom,
} from "../controllers/room";

const router = express.Router();

router.route("/").get(getAllRooms).post(addNewRoom);
router
	.route("/:roomId")
	.get(getRoomById)
	.patch(updateRoomById)
	.put(addUserInRoom)
	.delete(deleteRoomById);

export default router;
