import React from "react";
import { Settings } from "lucide-react";
import Link from "next/link";
import Searcher from "../searcher";

function Navbar() {
    return (
        <nav className="@module:navbar::nav">
            {/* Search input */}
            <Searcher />
            {/* Navigation Icons */}
            <div className="@module:navbar::navigator">
                <Link className="@module:navbar::link" href="/settings">
                    <Settings className="@module:navbar::linkIcon" />
                </Link>
                <div className="@module:navbar::hr" />
            </div>
        </nav>
    );
}

export default Navbar;
