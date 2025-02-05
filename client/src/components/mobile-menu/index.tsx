"use client";

import Searcher from "../searcher";
import { useDisplayProjects } from "@/store/useDisplayProjects";
import { useDisplayPriority } from "@/store/useDisplayPriority";

export default function MobileMenu() {
    const { displayedProjects, collapseProjects, expandProjects } =
        useDisplayProjects((state) => state);

    const { displayedPriority, collapsedPriority, expandPriority } =
        useDisplayPriority((state) => state);

    return (
        <div className="@module:mobileMenu::container">
            <Searcher />
        </div>
    );
}
