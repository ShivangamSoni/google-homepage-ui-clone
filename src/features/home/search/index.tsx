import classes from "./style.module.css";

export default function Search() {
    return (
        <main className={`container ${classes.main}`}>
            <div className={classes.imageContainer}>
                <picture>
                    <img
                        src="https://www.google.com/logos/doodles/2023/googles-25th-birthday-6753651837110114.2-law.gif"
                        alt="Google's 25th Birthday"
                        className={classes.image}
                    />
                </picture>
            </div>
        </main>
    );
}
