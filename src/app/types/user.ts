export type LocalGitHubUser = {
	login: string;
	avatar: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	bio: string;
	twitter: string;
	created: string;
	repos: string;
	followers: number;
	following: number;
};

export type GitHubUser = {
	login: string;
	id: number;
	avatar_url: string;
	name: string;
	company: string;
	blog: string;
	location: string;
	bio: string;
	twitter_username: string;
	created_at: string;
	repos_url: string;
	followers: number;
	following: number;
};

export type GitHubError = {
	message: string;
	documentation_url: string;
};
