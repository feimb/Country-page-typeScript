import { useEffect, useState } from "react";
import { Card } from "../../layout/Card";
import getCountry from "../../services/getCountry";
import { CardSkeleton } from "./Skeleton/CardSkeleton";
import { SearchInput } from ".//components/SearchInput";
import { SortBy } from "./components/SortBy";
import { SortRegion } from "./components/SortRegion";
import { SortMember } from "./components/SortMember";
import { CountryRow } from "./components/CountryRow";

export const Index = () => {
    const [countrys, setCountrys] = useState<any>(null);
    const [search, setSearch] = useState<string>("");
    useEffect(() => {
        console.log(search);
    }, [setSearch]);
    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountry();

            console.log(data);
            setCountrys(data);
        };
        fetchCountries();
    }, []);
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
                    <div className="w-full flex flex-col md:grid md:grid-cols-12 md:items-baseline-last mb-4">
                        <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-8">
                            Found {countrys.data.meta.total} countris
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
                        <div className="mt-8 md:mt-0 col-span-10 md:px-8 border-separate border-spacing-y-4">
                            <table className="w-full h-full ">
                                <thead className=" ">
                                    <tr className="text-xs font-bold  ">
                                        {titles.map((title) => (
                                            <td
                                                className="pb-4 border-b-2  border-border-primary"
                                                key={title}
                                            >
                                                {title}
                                            </td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="border-separate border-spacing-y-4">
                                    {countrys.data.objects
                                        .slice(1)
                                        .map((country: any) => (
                                                <CountryRow
                                                    key={country.codes.alpha_3}
                                                    country={country}
                                                />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
};
