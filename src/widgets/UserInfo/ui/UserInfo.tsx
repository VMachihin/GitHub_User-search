import { InfoItem, InfoItemProps } from "widgets/InfoItem";
import WebsiteIcon from "shared/assets/icon-website.svg";
import CompanyIcon from "shared/assets/icon-company.svg";
import LocationIcon from "shared/assets/icon-location.svg";
import TwitterIcon from "shared/assets/icon-twitter.svg";
import { LocalGitHubUser } from "app/types/user";

import styles from "./UserInfo.module.scss";

interface UserInfoProps
	extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> {
	[key: string]: string;
}

export const UserInfo = ({
	blog,
	company,
	location,
	twitter,
}: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: LocationIcon,
			text: location,
		},
		{
			icon: WebsiteIcon,
			text: blog,
			isLink: true,
		},
		{
			icon: CompanyIcon,
			text: company,
		},
		{
			icon: TwitterIcon,
			text: twitter,
		},
	];
	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => {
				return <InfoItem {...item} key={index} />;
			})}
		</div>
	);
};
