import { useLayoutEffect } from "react";
import { useTheme } from "./context/SiteTheme";
import Home from "./pages/home/page";

export default function App() {
    const { mode } = useTheme();

    console.log(mode);

    useLayoutEffect(() => {
        console.log("App Theme", mode, document.querySelector("html"));
        const html = document.querySelector("html");
        if (html) {
            if (mode === "dark") {
                html.classList.add("dark");
                html.classList.remove("light");
            } else {
                html.classList.add("light");
                html.classList.remove("dark");
            }
        }
    }, [mode]);

    return <Home />;
}
