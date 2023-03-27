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

type PrimitiveMessage = Message & {
	id?: MessageId;
	from: Partial<User> & {
		username: string;
	};
	room?: Room;
};

type Message = {
	id: MessageId;
	text: string;
	from: User;
	room: Room;
	roomId: RoomId;
	senderId: UserId;
};
