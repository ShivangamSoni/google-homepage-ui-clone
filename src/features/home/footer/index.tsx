import Link from "../../../common/components/link";
import { useTheme } from "../../../context/SiteTheme";
import { FOOTER_LINKS, FOOTER_TERMS } from "../../../data/nav";

import classes from "./style.module.css";

export default function Footer() {
    const { mode, toggleMode } = useTheme();

    return (
        <footer className={classes.footer}>
            <div className={classes.location}>
                <span>India</span>
            </div>

            <nav className={classes.nav} aria-label="Footer Nav Menu">
                <ul className={classes.links}>
                    {FOOTER_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className={classes.link}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={classes.links}>
                    {FOOTER_TERMS.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} className={classes.link}>
                                {label}
                            </Link>
                        </li>
                    ))}

                    <Link
                        className={classes.link}
                        onClick={toggleMode}
                        href="#"
                    >
                        Dark theme: {mode === "dark" ? "on" : "off"}
                    </Link>
                </ul>
            </nav>
        </footer>
    );
}
