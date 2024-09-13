import { useEffect, useState } from "react";
import SunIcon from "shared/assets/icon-sun.svg";
import MoonIcon from "shared/assets/icon-moon.svg";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false);
	const themeText = isDark ? "Dark" : "Light";
	const ThemeIcon = isDark ? (
		<img src={MoonIcon} width={20} />
	) : (
		<img src={SunIcon} width={20} />
	);
	const currentTheme = isDark ? "dark" : "light";

	useEffect(() => {
		document.body.setAttribute("data-theme", currentTheme);
	}, [isDark, currentTheme]);

	return (
		<div
			className={styles.themeSwitcher}
			onClick={() => {
				setIsDark(!isDark);
			}}
		>
			{ThemeIcon}

			<span>{themeText}</span>
		</div>
	);
};
