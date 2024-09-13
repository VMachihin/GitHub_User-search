import { GitHubUser, LocalGitHubUser } from "app/types/user";

export const extractUser = (user: GitHubUser): LocalGitHubUser => {
	return {
		login: user.login,
		avatar: user.avatar_url,
		name: user.name,
		bio: user.bio,
		blog: user.blog,
		company: user.company,
		created: user.created_at,
		followers: user.followers,
		following: user.following,
		location: user.location,
		repos: user.repos_url,
		twitter: user.twitter_username,
	};
};
