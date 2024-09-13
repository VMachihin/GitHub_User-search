import { LocalGitHubUser } from "app/types/user";
import styles from "./UserTitle.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserTitleProps
	extends Pick<LocalGitHubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-Gb", {
	day: "numeric",
	month: "short",
	year: "numeric",
});

export const UserTitle = (props: UserTitleProps) => {
	const { name, login, created } = props;
	const joinedDate = localDate.format(new Date(created));

	return (
		<div className={styles.userTitle}>
			<h2>{name}</h2>
			<h3>&#64;{login}</h3>
			<span>Joined {joinedDate}</span>
		</div>
	);
};
