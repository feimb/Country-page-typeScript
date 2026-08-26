import { Search } from "lucide-react";

type props = {
    setSearch: (value: string) => void;
    search: string;
    gridClass: string
};

export const SearchInput = ({ setSearch, search, gridClass }: props) => {
    const handleOnChange = (value: string) => {
        setSearch(value);
    };

    return (
        <div className={`w-full  p-2 gap-2  rounded-lg bg-border-primary text-text-primary flex items-center ${gridClass}`}>
            <Search />
            <input
                className="outline-none text-text-primary placeholder:text-text-primary/80 overflow-hidden"
                type="text"
                placeholder="Search by Name, Region..."
                value={search}
                onChange={(e) => handleOnChange(e.target.value)}
            />
        </div>
    );
};
