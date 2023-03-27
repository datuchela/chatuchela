import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { login, signUp } from "../api/user";

type LoginProps = {
	userState: {
		user: User | null;
		setUser: React.Dispatch<User | null>;
	};
};

export const Login = ({ userState }: LoginProps) => {
	const { setUser } = userState;
	const [username, setUsername] = useState("");
	const usernameRef = useRef<HTMLInputElement>(null);

	const {
		isLoading,
		isError,
		mutate: signIn,
	} = useMutation({
		mutationFn: login,
		mutationKey: ["user"],
		onSuccess: (data) => {
			setUser(data);
			window.localStorage.setItem("username", data.username);
		},
	});

	const {
		isLoading: isSignUpLoading,
		isError: isSignUpError,
		mutate: register,
	} = useMutation({
		mutationFn: signUp,
		mutationKey: ["user"],
		onSuccess: (data) => {
			setUser(data);
			window.localStorage.setItem("username", data.username);
		},
	});

	useEffect(() => {
		const localUsername = window.localStorage.getItem("username");
		if (!localUsername) return;
		signIn(localUsername);
	}, []);

	function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		signIn(username);
	}

	function handleSignUp(e: React.FormEvent) {
		e.preventDefault();
		const signUpUsername = usernameRef.current?.value;
		if (!signUpUsername) return;
		register(signUpUsername);
	}

	return (
		<main className="p-8 flex flex-col gap-2">
			{(isLoading || isSignUpLoading) && "Loading"}
			{(isError || isSignUpError) && "Error"}
			<form onSubmit={handleLogin}>
				<input
					type="text"
					className="border border-gray-300"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					type="submit"
					className="px-2 border border-gray-200"
				>
					Login
				</button>
			</form>
			<div>Or</div>
			<form onSubmit={handleSignUp}>
				<input
					type="text"
					className="border border-gray-300"
					ref={usernameRef}
				/>
				<button
					type="submit"
					className="px-2 border border-gray-200"
				>
					Sign Up
				</button>
			</form>
		</main>
	);
};
