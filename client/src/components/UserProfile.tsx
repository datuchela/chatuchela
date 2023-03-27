type UserProfileProps = {
	userState: {
		user: User;
		setUser: React.Dispatch<User | null>;
	};
};

export const UserProfile = ({ userState }: UserProfileProps) => {
	const { user, setUser } = userState;

	function handleLogOut() {
		setUser(null);
		window.localStorage.removeItem("username");
	}

	return (
		<header className="flex items-center px-4">
			<div className="flex-1">
				<div>id: {user.id}</div>
				<div>username: {user.username}</div>
			</div>
			<button
				type="button"
				className="px-2 py-1 border border-gray-200 rounded-md hover:bg-gray-100"
				onClick={handleLogOut}
			>
				Log Out
			</button>
		</header>
	);
};
