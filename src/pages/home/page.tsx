import Footer from "../../features/home/footer";
import Header from "../../features/home/header";
import Search from "../../features/home/search";

import classes from "./style.module.css";

export default function Home() {
    return (
        <div className={classes.home}>
            <Header />
            <Search />
            <Footer />
        </div>
    );
}
