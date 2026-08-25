import { useEffect, useState } from "react";
import { Card } from "../../layout/Card";
import getCountry from "../../services/getCountry";
import { CardSkeleton } from "./Skeleton/CardSkeleton";
import { SearchInput } from "../../components/SearchInput";
import { SortBy } from "../../components/SortBy";

export const Index = () => {
    const [country, setCountry] = useState<any>(null);
    const [search, setSearch] = useState<string>("");
    useEffect(() => {
        console.log(search);
    }, [setSearch]);
    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountry();

            console.log(data);
            setCountry(data);
        };
        fetchCountries();
    }, []);

    return (
        <Card className="min-h-[60vh] py-4 md:px-8 px-3 -mt-4">
            {country ? (
                <div>
                    <div className="w-full flex flex-col md:grid md:grid-cols-12 md:items-baseline-last ">
                        <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-6">
                            Found {country.data.meta.total} countris
                        </p>
                        <SearchInput setSearch={setSearch} search={search} />
                    </div>
                    <SortBy />
                </div>
            ) : (
                <CardSkeleton />
            )}
        </Card>
    );
};
