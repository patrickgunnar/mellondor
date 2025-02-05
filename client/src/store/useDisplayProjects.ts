import { create } from "zustand";

interface DisplayProjectsStore {
    displayedProjects: boolean;
    expandProjects: () => void;
    collapseProjects: () => void;
}

export const useDisplayProjects = create<DisplayProjectsStore>((set) => ({
    displayedProjects: false,
    expandProjects: () => set(() => ({ displayedProjects: false })),
    collapseProjects: () => set(() => ({ displayedProjects: true })),
}));
