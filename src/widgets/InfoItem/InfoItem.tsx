import styles from "./InfoItem.module.scss";

export interface InfoItemProps {
	icon: string;
	text?: string | null;
	isLink?: boolean;
}

export const InfoItem = ({ icon, text, isLink }: InfoItemProps) => {
	const currentText = text || "The not available";
	let currentHref = "";

	if (text) {
		currentHref = text && text.startsWith("http") ? text : `https://${text}`;
	}

	return (
		<div className={`${styles.infoItem}${text ? "" : ` ${styles.empty}`}`}>
			<img src={icon}></img>
			<div className=''>
				{isLink && text ? (
					<a
						href={currentHref}
						target='_blank'
						rel='noreferrer'
						className={styles.link}
					>
						{currentText}
					</a>
				) : (
					currentText
				)}
			</div>
		</div>
	);
};
