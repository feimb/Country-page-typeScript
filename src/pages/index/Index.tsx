import { useEffect, useState } from "react";
import { Card } from "../../layout/Card";
import getCountry from "../../services/getCountry";

export const Index = () => {
    const [country, setCountry] = useState<any>([]);
    useEffect(() => {
        const fetchCountries = async () => {
            const data = await getCountry();

            console.log(data);
            setCountry(data);
        };
        fetchCountries()
    }, []);
    return (
        <Card className="min-h-[60vh] py-6 px-8 -mt-4">
            <p className="text-sm font-bold">Found {country.data.meta.total} countris</p>
        </Card>
    );
};
