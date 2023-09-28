import { LANGUAGES } from "../../../data/languages";

import classes from "./style.module.css";

import Link from "../../../common/components/link";

export default function LanguageSelector() {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Google offered in:</h3>
            <ul className={classes.languages}>
                {LANGUAGES.map(({ value, label }) => (
                    <li key={value}>
                        <Link
                            className={classes.language}
                            href={`/set-lang?v=${value}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
