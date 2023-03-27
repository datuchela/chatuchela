import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getRoomById } from "../api/room";
import { socket } from "../App";

const ChatMessage = ({ user, msg }: { user: User; msg: PrimitiveMessage }) => {
	const isAuthor = user.id === msg.senderId;

	return (
		<li className={`flex ${isAuthor ? "justify-end" : "justify-start"}`}>
			<div className="flex flex-col gap-1">
				<span className={`${isAuthor ? "hidden" : "text-sm"}`}>
					{msg.from.username}:{" "}
				</span>
				<span
					className={`px-3 py-2 rounded-md ${
						isAuthor ? "bg-blue-600 text-white" : "bg-gray-200"
					}`}
				>
					{msg.text}
				</span>
			</div>
		</li>
	);
};

export const Chat = ({
	currentRoomId,
	user,
}: {
	currentRoomId: RoomId | null;
	user: User;
}) => {
	const [chat, setChat] = useState<PrimitiveMessage[]>([]);
	const [messageText, setMessageText] = useState("");

	const {
		data: room,
		isFetching: isRoomFetching,
		isError: isRoomError,
		refetch: refetchRoom,
	} = useQuery<Room>(["room", currentRoomId], () => getRoomById(currentRoomId!), {
		enabled: false,
		onSuccess: (data) => {
			const messages = data.messages;
			if (!messages) return;
			setChat(messages);
		},
	});

	useEffect(() => {
		if (!currentRoomId) return;
		refetchRoom();
	}, [currentRoomId]);

	useEffect(() => {
		socket.on("message", (msg: Message) => {
			setChat((prev) => [...prev, msg]);
		});

		return () => {
			socket.off("message");
		};
	}, []);

	function handleSendMessage(e: React.FormEvent) {
		e.preventDefault();
		const msg = {
			text: messageText,
			senderId: user.id,
			roomId: room?.id,
			from: { username: user.username },
		};
		setChat((prev) => [...prev, msg as PrimitiveMessage]);
		socket.emit("message", msg);
		setMessageText("");
	}

	return (
		<div className="flex flex-col h-full">
			<ul className="flex-1 flex flex-col gap-2">
				{chat.map((msg, idx) => (
					<ChatMessage
						key={`msg-${idx}`}
						user={user}
						msg={msg}
					/>
				))}
			</ul>
			<form
				onSubmit={handleSendMessage}
				className="flex items-center w-full"
			>
				<input
					type="text"
					className="w-full border border-gray-400"
					value={messageText}
					onChange={(e) => setMessageText(e.target.value)}
				/>
				<button
					type="submit"
					className="border border-l-0 border-gray-400 rounded-sm px-2"
				>
					Send
				</button>
			</form>
		</div>
	);
};
