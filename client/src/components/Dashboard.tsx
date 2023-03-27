import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getRoomById, getRoomsByUserId } from "../api/room";
import { socket } from "../App";
import { Chat } from "./Chat";
import { Sidebar } from "./Sidebar";
import { UserProfile } from "./UserProfile";

type DashboardProps = {
	user: User;
	setUser: React.Dispatch<User | null>;
};

export default function Dashboard({ user, setUser }: DashboardProps) {
	const {
		data: rooms,
		isLoading: isRoomsLoading,
		isError: isRoomsError,
	} = useQuery<Room[]>(["rooms", user.id], () => getRoomsByUserId(user.id), {
		onSuccess: (data) => {
			if (data.length > 0) {
				setCurrentRoomId(data[0].id);
			}
		},
	});

	const [currentRoomId, setCurrentRoomId] = useState<RoomId | null>(null);

	useEffect(() => {
		if (!rooms || rooms.length < 1) return;
		rooms.forEach((room) => {
			socket.emit("join-room", { roomId: room.id, userId: user.id });
		});

		socket.on("join-room", ({ roomId, userId }) => {
			console.log("user has joined the room", { roomId, userId });
		});

		return () => {
			socket.off("join-room");
		};
	}, [rooms]);

	return (
		<div className="flex flex-col min-h-screen">
			<header className="border-b border-gray-400 p-2">
				<UserProfile userState={{ user, setUser }} />
			</header>

			<div className="flex flex-1 h-full">
				<aside className="flex-[2] border-r border-gray-400 min-h-full px-1 py-2">
					{isRoomsLoading && "Loading rooms..."}
					{isRoomsError && "Error fetching rooms"}
					{rooms && (
						<Sidebar
							rooms={rooms}
							currentRoom={{ currentRoomId, setCurrentRoomId }}
						/>
					)}
				</aside>
				<main className="flex-[7] p-4">
					<Chat
						user={user}
						currentRoomId={currentRoomId}
					/>
				</main>
				<aside className="flex-[2] border-l border-gray-400 min-h-full px-1 py-2">
					room info
				</aside>
			</div>
		</div>
	);
}
