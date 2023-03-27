import express from "express";
import {
	addNewMessage,
	getAllMessages,
	getMessageById,
	updateMessageById,
	deleteMessageById,
} from "../controllers/message";

const router = express.Router();

router.route("/").get(getAllMessages).post(addNewMessage);
router
	.route("/:messageId")
	.get(getMessageById)
	.patch(updateMessageById)
	.delete(deleteMessageById);

export default router;
