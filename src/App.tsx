import classes from "./app.module.css";
import Home from "./pages/home/page";

export default function App() {
    return (
        <div className={classes.app}>
            <Home />
        </div>
    );
}
