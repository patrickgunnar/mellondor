"use client";

import { useSidebar } from "@/store/useSidebar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    const [isDisplayProjects, setIsDisplayProjects] = useState<boolean>(false);
    const [isDisplayPriority, setIsDisplayPriority] = useState<boolean>(false);

    const handleCollapse = () => {
        if (collapsed) onExpand();
        else onCollapsed();
    };

    return (
        <aside
            className={`@module:sidebar::aside ${
                !collapsed
                    ? "@module:sidebar::wd16rem"
                    : "@module:sidebar::wd5rem"
            }`}
        >
            <div
                className={`@module:sidebar::lgContainer ${
                    collapsed
                        ? "@module:sidebar::justifyCenter"
                        : "@module:sidebar::justifyBetween"
                }`}
            >
                {!collapsed && (
                    <h1 className="@module:sidebar::logo">Mellondor</h1>
                )}
                <button
                    className="@module:sidebar::toggle"
                    type="button"
                    onClick={handleCollapse}
                >
                    {!collapsed ? <X /> : <Menu />}
                </button>
            </div>
            {!collapsed && <div>Profile</div>}
        </aside>
    );
}
