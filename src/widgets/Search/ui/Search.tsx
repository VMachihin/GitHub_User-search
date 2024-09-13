import { Button } from "shared/Button";
import SearchIcon from "shared/assets/icon-search.svg";

import styles from "./Search.module.scss";

interface SearchProps {
	hasError: boolean;
	onSubmit: (text: string) => void;
}

type FormFields = {
	userName: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement & FormFields>
	) => {
		event.preventDefault();

		const text = event.currentTarget.userName.value;

		if (text.trim()) {
			onSubmit(text);

			event.currentTarget.reset();
		}
	};

	return (
		<form action='#' onSubmit={handleSubmit} autoComplete='false'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<img src={SearchIcon} />
				</label>
				<input
					type='text'
					className={styles.textField}
					id='search'
					name='userName'
					placeholder='Search Github username...'
					autoComplete='false'
				/>

				{hasError && <div className={styles.error}>No result</div>}

				<Button>Search</Button>
			</div>
		</form>
	);
};
