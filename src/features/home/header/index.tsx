import { useState } from "react";

import { Grip as GripIcon } from "lucide-react";

import classes from "./style.module.css";

import DropDownModal from "../../../common/components/DropdownModal";
import Button from "../../../common/components/button";
import Link from "../../../common/components/link";
import Apps from "../Apps";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <li>
                        <DropDownModal
                            openButton={
                                <Button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    variant="ghost"
                                    className={classes.appBtn}
                                >
                                    <GripIcon />
                                </Button>
                            }
                            isOpen={isOpen}
                            position="bottom-right"
                            onClose={() => setIsOpen(false)}
                        >
                            <Apps />
                        </DropDownModal>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
