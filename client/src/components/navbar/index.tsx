import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="@module:navbar::nav">
            {/* Search input */}
            <div className="@module:navbar::searcher">
                <Search className="@module:navbar::searcherIcn" />
                <input
                    className="@module:navbar::searcherInput"
                    type="search"
                    placeholder="Search..."
                />
            </div>
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
