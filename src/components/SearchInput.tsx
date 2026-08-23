import { Search } from "lucide-react";
export const SearchInput = ({
    setSearch,
    search,
}: {
    setSearch: (value: string) => void;
    search: string;
}) => {
    const handleOnChange = (value: string) => {
        setSearch(value);
    };

    return (
        <div className="w-full  p-2 gap-2  rounded-lg bg-border-primary text-text-primary flex items-center col-span-3">
            <Search />
            <input
                className="outline-none text-text-primary placeholder:text-text-primary/80"
                type="text"
                placeholder="Search by Name, Region..."
                value={search}
                onChange={(e) => handleOnChange(e.target.value)}
            />
        </div>
    );
};
