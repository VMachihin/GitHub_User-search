import { useState } from "react";
import { Header } from "widgets/Header";
import { Container } from "shared/Container";
import { Search } from "widgets/Search";
import { UserCard } from "widgets/UserCard";
import { GitHubUser, LocalGitHubUser } from "./types/user";

import "./styles/global.scss";
import { isGithubUser } from "shared/model/typeguards";
import { extractUser } from "shared/model/extract-local-user";
import { defaultUser } from "shared/model/default-user";

const BASE_URL = "https://api.github.com/users/";
export const App = () => {
	const [user, setUser] = useState<LocalGitHubUser | null>(defaultUser);

	const fetchUser = async (userName: string) => {
		const url = BASE_URL + userName;

		const res = await fetch(url);
		const user = (await res.json()) as GitHubUser | GitHubUser;

		if (isGithubUser(user)) {
			setUser(extractUser(user));
		} else {
			setUser(null);
		}
	};
	return (
		<Container>
			<Header />
			<Search hasError={!user} onSubmit={fetchUser} />
			{user && <UserCard {...user} />}
		</Container>
	);
};
