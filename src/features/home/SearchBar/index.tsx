import { useState } from "react";

import { Search as SearchIcon } from "lucide-react";

import Button from "../../../common/components/button";
import Textarea from "../../../common/components/textarea";

import classes from "./style.module.css";

export default function SearchBar() {
    const [value, setValue] = useState("");
    return (
        <form className={classes.form}>
            <Textarea
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onClear={() => setValue("")}
                startIcon={
                    <span>
                        <SearchIcon color="hsl(220, 9%, 70%)" size={"1rem"} />
                    </span>
                }
            />

            <div className={classes.actions}>
                <Button>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </div>
        </form>
    );
}
