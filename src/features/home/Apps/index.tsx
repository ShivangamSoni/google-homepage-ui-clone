import { APPS } from "../../../data/apps";
// import { truncateText } from "../../../utils/truncateText";
import classes from "./style.module.css";

export default function Apps() {
    return (
        <div className={classes.container}>
            {APPS.map((list, idx) => (
                <ul className={classes.apps} key={idx}>
                    {list.map(({ label, position }, idx) => (
                        <li key={idx} className={classes.appContainer}>
                            <button className={classes.app}>
                                <span
                                    className={classes.icon}
                                    style={{ backgroundPosition: position }}
                                />
                                <span className={classes.title}>
                                    {/* {truncateText(label, 8)} */}
                                    {label}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}
