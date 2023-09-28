import { useTheme } from "../../../context/SiteTheme";

import { LOGO } from "../../../data/logo";

import classes from "./style.module.css";

import SearchBar from "../SearchBar";
import LanguageSelector from "../LanguageSelector";

export default function Search() {
    const { mode } = useTheme();

    return (
        <main className={`container ${classes.main}`}>
            <div className={classes.imageContainer}>
                <picture>
                    <img
                        src={LOGO[mode]}
                        alt="Google's Logo"
                        className={classes.image}
                    />
                </picture>
            </div>
            <SearchBar />
            <LanguageSelector />
        </main>
    );
}
