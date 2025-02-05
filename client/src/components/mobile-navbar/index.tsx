"use client";

import { useSidebar } from "@/store/useSidebar";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import MobileMenu from "../mobile-menu";

export default function MobileNavbar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    const handleCollapse = () => {
        if (collapsed) onExpand();
        else onCollapsed();
    };

    return (
        <nav className="@module:mobileNav::nav">
            <button
                className="@class:toggle"
                type="button"
                onClick={handleCollapse}
            >
                {!collapsed ? <X /> : <Menu />}
            </button>
            <h1 className="@class:logo">Mellondor</h1>
            {!collapsed && createPortal(<MobileMenu />, document.body)}
        </nav>
    );
}
