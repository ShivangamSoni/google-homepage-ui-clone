import { type ReactNode, createContext, useContext, useState } from "react";

type Mode = "dark" | "light";

const SiteThemeContext = createContext<{
    mode: Mode;
    toggleMode: () => void;
}>({
    mode: "light",
    toggleMode: () => {},
});

export function SiteThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<Mode>("light");

    function toggleMode() {
        setMode(mode === "dark" ? "light" : "dark");
    }

    return (
        <SiteThemeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </SiteThemeContext.Provider>
    );
}

export const useTheme = () => useContext(SiteThemeContext);
