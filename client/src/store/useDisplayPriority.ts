import { create } from "zustand";

interface DisplayPriorityStore {
    displayedPriority: boolean;
    expandPriority: () => void;
    collapsedPriority: () => void;
}

export const useDisplayPriority = create<DisplayPriorityStore>((set) => ({
    displayedPriority: false,
    expandPriority: () => set(() => ({ displayedPriority: false })),
    collapsedPriority: () => set(() => ({ displayedPriority: true })),
}));
