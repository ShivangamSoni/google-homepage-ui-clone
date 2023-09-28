import Link from "../../../common/components/link";

import classes from "./style.module.css";

export default function Header() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.navList}>
                    <li>
                        <Link href="Test">Gmail</Link>
                    </li>
                    <li>
                        <Link href="Test">Images</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
