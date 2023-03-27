import { axiosInstance } from "./axios";

export const getRoomsByUserId = async (userId: string): Promise<Room[]> => {
	const res = await axiosInstance.get(`/rooms?userId=${userId}`);
	return res.data;
};

export const getRoomById = async (roomId: RoomId): Promise<Room> => {
	const res = await axiosInstance.get(`/room/${roomId}`);
	return res.data;
};
