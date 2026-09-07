import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCountry from "../../services/getCountry";

export const CountryPage = () => {
    const { code } = useParams<{ code: string | undefined }>();
    const [country, setCountry] = useState<any>(null);
    useEffect(() => {
        if (!code) return;
        const fetchCountry = async () => {
            const data = await getCountry(code);

            console.log(data.data.objects[0]);
            setCountry(data.data.objects[0]);
        };
        fetchCountry();
    }, []);
    return (
        <>
            <div>
                {country && (
                    <img src={country.flag.url_png} alt="" />
                )}
            </div>
        </>
    );
};
