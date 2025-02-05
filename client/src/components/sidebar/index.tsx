"use client";

import { useDisplayPriority } from "@/store/useDisplayPriority";
import { useDisplayProjects } from "@/store/useDisplayProjects";
import { useSidebar } from "@/store/useSidebar";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);
    const { displayedProjects, collapseProjects, expandProjects } =
        useDisplayProjects((state) => state);

    const { displayedPriority, collapsedPriority, expandPriority } =
        useDisplayPriority((state) => state);

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
                {!collapsed && <h1 className="@class:logo">Mellondor</h1>}
                <button
                    className="@class:toggle"
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
