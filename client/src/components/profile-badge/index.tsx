import { Snail, User } from "lucide-react";

export default function ProfileBadge({ collapsed }: { collapsed: boolean }) {
    return (
        <div
            className={` ${
                !collapsed ? "@module:pBadge::expanded" : "@module:pBadge::box"
            }`}
        >
            <Snail className="@module:pBadge::logo" />
            {!collapsed && (
                <div className="@module:pBadge::heading">
                    <h3 className="@module:pBadge::name">Galadriel CSS</h3>
                    <div className="@module:pBadge::subheading">
                        <User className="@module:pBadge::subheadingIcn" />
                        <span>Private</span>
                    </div>
                </div>
            )}
        </div>
    );
}
