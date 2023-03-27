import { useState } from "react";
import { io } from "socket.io-client";
import Dashboard from "./components/Dashboard";
import { Login } from "./components/Login";

export let socket = io("http://localhost:5000/");

function App() {
	const [user, setUser] = useState<User | null>(null);

	return (
		<>
			{user ? (
				<Dashboard
					user={user}
					setUser={setUser}
				/>
			) : (
				<Login userState={{ user, setUser }} />
			)}
		</>
	);
}

export default App;
