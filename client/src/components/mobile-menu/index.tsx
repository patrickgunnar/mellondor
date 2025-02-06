"use client";

import Searcher from "../searcher";
import { useDisplayProjects } from "@/store/useDisplayProjects";
import { useDisplayPriority } from "@/store/useDisplayPriority";
import ProfileBadge from "../profile-badge";
import { useSidebar } from "@/store/useSidebar";

export default function MobileMenu() {
    const { collapsed } = useSidebar((state) => state);
    const { displayedProjects, collapseProjects, expandProjects } =
        useDisplayProjects((state) => state);

    const { displayedPriority, collapsedPriority, expandPriority } =
        useDisplayPriority((state) => state);

    return (
        <div className="@module:mobileMenu::container">
            <Searcher />
            <ProfileBadge collapsed={collapsed} />
        </div>
    );
}
