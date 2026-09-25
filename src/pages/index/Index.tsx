import { useEffect, useState } from "react";
import getCountrys from "../../services/getCountrys";
import { CardSkeleton } from "./Skeleton/CardSkeleton";
import { SearchInput } from ".//components/SearchInput";
import { SortBy } from "./components/SortBy";
import { SortRegion } from "./components/SortRegion";
import { SortMember } from "./components/SortMember";
import { CountrySection } from "./components/CountrySection";

export const Index = () => {
    const [countrys, setCountrys] = useState<any>(null);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                let data;

                if (!search.trim()) {
                    data = await getCountrys();
                } else {
                    data = await getCountrys(search);
                }

                console.log(data.data);
                setCountrys(data.data);
            } catch (err) {
                console.error(err);
            }
        };
        const timer = setTimeout(() => {
            fetchCountries();
        }, 1000);
        return () => clearTimeout(timer)
    }, [search]);

    const titles: Array<string> = [
        "Flag",
        "Name",
        "Population",
        "Area (km²)",
        "Region",
    ];
    return (
        <>
            {countrys ? (
                <div>
                    <div className="w-full   flex flex-col md:grid md:grid-cols-12 md:items-baseline-last mb-4">
                        <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-8">
                            Found {countrys.meta.total} countris
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
                        <CountrySection
                            titles={titles}
                            countrys={countrys.objects}
                        />
                    </div>
                </div>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
};
