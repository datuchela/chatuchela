import { axiosInstance } from "./axios";

export const login = async (username: string): Promise<User> => {
	const res = await axiosInstance.post("/auth", {
		username,
	});
	return res.data;
};

export const signUp = async (username: string): Promise<User> => {
	const res = await axiosInstance.post("/user", { username });
	return res.data;
};
