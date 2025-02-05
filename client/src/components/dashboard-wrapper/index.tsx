"use client";

import React, { PropsWithChildren, useEffect } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { useSidebar } from "@/store/useSidebar";
import { useMediaQuery } from "usehooks-ts";

const DashboardWrapper = ({ children }: PropsWithChildren) => {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);
    const matches = useMediaQuery("(max-width: 1024px)");

    useEffect(() => {
        if (matches) onCollapsed();
        else onExpand();
    }, [matches, onCollapsed, onExpand]);

    return (
        <div className="@module:dashWrap::wrapper">
            <Sidebar />
            <main
                className={`@module:dashWrap::main ${
                    !collapsed
                        ? "@module:dashWrap::wd100less16rem"
                        : "@module:dashWrap::wd100less5rem"
                }`}
            >
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardWrapper;
