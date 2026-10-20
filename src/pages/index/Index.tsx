import { useEffect, useMemo, useState } from "react";
import { CardSkeleton } from "./Skeleton/CardSkeleton";
import { SearchInput } from ".//components/SearchInput";
import { SortBy } from "./components/SortBy";
import { SortRegion } from "./components/SortRegion";
import { SortMember } from "./components/SortMember";
import { CountrySection } from "./components/CountrySection";
import getAllCountries from "../../hooks/getAllCountries";

export const Index = () => {
    const [loadig, setLoading] = useState<boolean>(true);

    const [countrys, setCountrys] = useState<any[]>([]);
    // variables de busqueda
    const [search, setSearch] = useState<string | null>(null);
    const [regions, setRegions] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");

    const [checks, setChecks] = useState<
        { label: string; isActive: boolean }[]
    >([
        { label: "Member of the United Nations", isActive: false },
        { label: "Independent", isActive: false },
    ]);

    //varia bles de pagina
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         try {
    //             if(countrys.length === 0){
    //                 const {allCountries, metaData} = await getAllCountries()
    //                 setTotal(metaData.total);
    //                 console.log(allCountries);
    //                 setCountrys(allCountries);
    //             }
    //             // if (!search?.trim()|| regions.length > 0) {
    //             //     data = await getCountrys(25, page * 25, regions);
    //             //     setLoading(true)
    //             //     setCountrys(data.data.objects);
    //             // } else {
    //             //     data = await getCountrys(25, page * 25, regions ,search);

    //             //     setCountrys((prev) => [...prev, ...data.data.objects]);

    //             // }

    //             // setTotal(data.data.meta.total);
    //             // console.log(data.data);
    //         } catch (err) {
    //             console.error(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //         const timer = setTimeout(() => {
    //          fetchCountries();
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [search, page, regions, sortBy]);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const { allCountries, metaData } = await getAllCountries();

                console.log(allCountries);

                setTotal(metaData.total);
                setCountrys(allCountries);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);
    // useEffect(() => {
    //     const searchCountries = async () => {
    //         try {
    //             const query = search?.toLowerCase().trim();
    //             setFilterCountrys(
    //                 countrys.filter((country) =>
    //                     country.names.common.toLowerCase().includes(query),
    //                 ),
    //             );
    //         } catch (err) {
    //             console.error(err);
    //         } finally {
    //             console.log(filterCountrys);
    //         }
    //     };
    //     const timer = setTimeout(() => {
    //         searchCountries();
    //     }, 100);
    //     return () => clearTimeout(timer);
    // }, [search, regions, sortBy]);
    const filterCountrys = useMemo(() => {
        let result = [...countrys];
        const query = search?.toLowerCase().trim();
        if (query !== undefined) {
            result = result.filter((country) =>
                country.names.common.toLowerCase().includes(query),
            );
        }
        if (regions.length > 0) {
            result = result.filter((country) => regions === country.region);
        }
        if (sortBy === "population") {
            result = result.sort((a, b) => b.population - a.population);
        }
        if (sortBy === "area") {
            result = result.sort(
                (a, b) => b.area.kilometers - a.area.kilometers,
            );
        }
        if (checks[0].isActive) {
            result = result.filter(
                (country) => country.parent.alpha_3 === "USA",
            );
        }
        if (checks[1].isActive) {
            result = result.filter(
                (country) => country.classification.sovereign,
            );
        }
        console.log(result);

        return result;
    }, [countrys, search, regions, sortBy, checks]);
    const titles: Array<string> = [
        "Flag",
        "Name",
        "Population",
        "Area (km²)",
        "Region",
    ];
    return (
        <>
            {!loadig ? (
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
                            <SortBy setSortBy={setSortBy} />
                            <SortRegion
                                regions={regions}
                                setRegions={setRegions}
                            />
                            <SortMember checks={checks} setChecks={setChecks} />
                        </div>
                        {filterCountrys.length > 0 && (
                            <CountrySection
                                titles={titles}
                                countrys={filterCountrys}
                            />
                        )}
                        {total > 25 && (
                            <button
                                className="w-full mt-4 text-lg font-bold flex justify-center md:col-start-3 md:col-span-10 hover:underline hover:cursor-pointer"
                                onClick={() => {
                                    setPage(page + 1);
                                }}
                            >
                                view more countrys
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <CardSkeleton />
            )}
        </>
    );
};
