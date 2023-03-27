import express from "express";
import {
	addNewUser,
	deleteUserById,
	getAllUsers,
	getUserById,
	updateUserById,
} from "../controllers/user";

const router = express.Router();

router.route("/").get(getAllUsers).post(addNewUser);
router
	.route("/:userId")
	.get(getUserById)
	.patch(updateUserById)
	.delete(deleteUserById);

export default router;
