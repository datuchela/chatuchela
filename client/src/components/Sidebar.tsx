import { useQuery } from "@tanstack/react-query";
import { getRoomsByUserId } from "../api/room";

const RoomButton = ({
	room,
	active,
	onClick,
}: {
	room: Room;
	active: boolean;
	onClick: () => void;
}) => {
	return (
		<li>
			<button
				className={`flex flex-col gap-1 w-full p-2 hover:bg-slate-100 rounded-md ${
					active && "bg-slate-200"
				}`}
				type="button"
				onClick={onClick}
			>
				<span>{room.name}</span>
			</button>
		</li>
	);
};

type SidebarProps = {
	rooms: Room[];
	currentRoom: {
		currentRoomId: RoomId | null;
		setCurrentRoomId: React.Dispatch<RoomId | null>;
	};
};

export const Sidebar = ({ rooms, currentRoom }: SidebarProps) => {
	const { currentRoomId, setCurrentRoomId } = currentRoom;

	return (
		<>
			<ul>
				{rooms.map((room) => (
					<RoomButton
						key={room.id}
						room={room}
						active={currentRoomId === room.id}
						onClick={() => setCurrentRoomId(room.id)}
					/>
				))}
			</ul>
		</>
	);
};
