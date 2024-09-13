import { LocalGitHubUser } from "types";
import { UserInfo } from "widgets/UserInfo";
import { UserStat } from "widgets/UserStat";
import { UserTitle } from "widgets/UserTitle";

import styles from "./UserCard.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserCardProps extends LocalGitHubUser {}

export const UserCard = (props: UserCardProps) => {
	const {
		avatar,
		name,
		login,
		created,
		bio,
		repos,
		followers,
		following,
		blog,
		company,
		location,
		twitter,
	} = props;
	return (
		<div className={styles.userCard}>
			<img src={avatar} alt='avatar' className={styles.avatar} />
			<UserTitle name={name} login={login} created={created} />
			<p className={`${styles.bio}${bio ? "" : ` ${styles.empty}`}`}>
				{bio || "This profile has no bio"}
			</p>
			<UserStat repos={repos} followers={followers} following={following} />
			<UserInfo
				blog={blog}
				company={company}
				location={location}
				twitter={twitter}
			/>
		</div>
	);
};
