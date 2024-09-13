import styles from "./Button.module.scss";

interface ButtonProps {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick } = props;

	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};
