import { LocalGitHubUser } from "app/types/user";
import styles from "./UserStat.module.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UserStatProps
	extends Pick<LocalGitHubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
	<div className={styles.userStat}>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Repos</div>
			<div className={styles.infoNumber}>{repos.length}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Followers</div>
			<div className={styles.infoNumber}>{followers}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Following</div>
			<div className={styles.infoNumber}>{following}</div>
		</div>
	</div>
);
