import React, { PropsWithChildren } from "react";
import Navbar from "../navbar";

const DashboardWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="@module:dashWrap::wrapper">
            {/* Sidebar */}
            <main className="@module:dashWrap::main">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardWrapper;
