"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import { useSidebar } from "@/store/useSidebar";
import { useMediaQuery } from "usehooks-ts";
import MobileNavbar from "../mobile-navbar";
import Loading from "@/app/loading";

const DashboardWrapper = ({ children }: PropsWithChildren) => {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    const mdMatches = useMediaQuery("(max-width: 1024px)");
    const smMatches = useMediaQuery("(max-width: 768px)");

    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        if (mdMatches) onCollapsed();
        else onExpand();
    }, [mdMatches, onCollapsed, onExpand]);

    useEffect(() => {
        if (typeof window !== "undefined") setIsClient(true);
    }, []);

    if (!isClient) return <Loading />;

    return (
        <div className="@module:dashWrap::wrapper">
            {!smMatches && <Sidebar />}
            <main
                className={`@module:dashWrap::main ${
                    !smMatches
                        ? !collapsed
                            ? "@module:dashWrap::wd100less16rem"
                            : "@module:dashWrap::wd100less5rem"
                        : "@module:dashWrap::wd100"
                }`}
            >
                {!smMatches ? <Navbar /> : <MobileNavbar />}
                {children}
            </main>
        </div>
    );
};

export default DashboardWrapper;
