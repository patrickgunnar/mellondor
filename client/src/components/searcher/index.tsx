import { Search } from "lucide-react";

export default function Searcher() {
    return (
        <div className="@module:searcher::container">
            <Search className="@module:searcher::searcherIcn" />
            <input
                className="@module:searcher::searcherInput"
                type="search"
                placeholder="Search..."
            />
        </div>
    );
}
