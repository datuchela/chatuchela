type UserId = string;
type RoomId = string;
type MessageId = string;

type User = {
	id: UserId;
	username: string;
	rooms?: Room[];
	sentMessages?: Message[];
};

type Room = {
	id: RoomId;
	name: string;
	users?: User[];
	messages?: Message[];
};

type PrimitiveMessage = Omit<Omit<Omit<Message, "id">, "from">, "room">;

type Message = {
	id: MessageId;
	text: string;
	roomId: RoomId;
	senderId: UserId;
	from: User;
	room: Room;
};
