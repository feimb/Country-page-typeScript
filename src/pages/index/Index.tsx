import { useEffect, useState } from "react";
import getCountrys from "../../services/getCountrys";
import { CardSkeleton } from "./Skeleton/CardSkeleton";
import { SearchInput } from ".//components/SearchInput";
import { SortBy } from "./components/SortBy";
import { SortRegion } from "./components/SortRegion";
import { SortMember } from "./components/SortMember";
import { CountrySection } from "./components/CountrySection";

export const Index = () => {
    const [countrys, setCountrys] = useState<any[]>([]);
    const [search, setSearch] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                let data;

                if (!search?.trim()) {
                    data = await getCountrys(25, page * 25);
                } else {
                    data = await getCountrys(25, page * 25, search);
                }

                console.log(data.data);
                setTotal(data.data.meta.total);
                setCountrys((prev) => [...prev, ...data.data.objects]);
            } catch (err) {
                console.error(err);
            }
        };
        const timer = setTimeout(() => {
            fetchCountries();
        }, 1000);
        return () => clearTimeout(timer);
    }, [search, page]);

    const titles: Array<string> = [
        "Flag",
        "Name",
        "Population",
        "Area (km²)",
        "Region",
    ];
    return (
        <>
            {countrys.length > 0 ? (
                <div>
                    <div className="w-full   flex flex-col md:grid md:grid-cols-12 md:items-baseline-last mb-4">
                        <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-8">
                            Found {total} countris
                        </p>
                        <SearchInput
                            setSearch={setSearch}
                            search={search}
                            gridClass={"col-span-4"}
                        />
                    </div>
                    <div className="w-full md:grid grid-cols-12">
                        <div className=" md:col-span-2">
                            <SortBy />
                            <SortRegion />
                            <SortMember />
                        </div>
                        <CountrySection titles={titles} countrys={countrys} />
                        <button
                            className="w-full mt-4 text-lg font-bold flex justify-center hover:underline hover:cursor-pointer"
                            onClick={() => {
                                setPage(page + 1);
                            }}
                        >
                            view more countrys
                        </button>
                    </div>
                </div>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
};
