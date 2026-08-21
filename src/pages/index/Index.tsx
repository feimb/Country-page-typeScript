import { useEffect, useState } from "react";
import { Card } from "../../layout/Card";
import getCountry from "../../services/getCountry";
import Skeleton from "react-loading-skeleton";

export const Index = () => {
    const [country, setCountry] = useState<any>(null);
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
                
                <p className="text-sm font-bold">
                    Found {country.data.meta.total} countris
                </p>
            ):
                <p className="text-sm font-bold">
                    <Skeleton count={1} width={140}/>
                </p>
            }
        </Card>
    );
};
