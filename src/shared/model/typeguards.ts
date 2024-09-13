import { GitHubUser } from "app/types/user";

export const isGithubUser = (user: any): user is GitHubUser => {
	return "id" in user;
};
