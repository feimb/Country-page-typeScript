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
    const arrMetadata: Array<{ nameData: string; cant: number }> = [
        {
            nameData: "Population",
            cant: country.population,
        },
        { nameData: "Area (km²)", cant: country.area.kilometers },
    ];
    return (
        <>
            <div className="w-65 flex m-auto">
                {country && (
                    <div>
                        <img
                            src={country.flag.url_png}
                            alt=""
                            className="-mt-16 rounded-lg"
                        />
                        <div className="text-center mt-6">
                            <h3 className="text-lg font-bold">
                                {country.names.common}
                            </h3>
                            <h4 className="text-sm">
                                {country.names.official}
                            </h4>
                        </div>
                        <div className="">
                            {arrMetadata.map(({nameData, cant}:{nameData:string; cant:number})=>(
                                <div>
                                    <p>{nameData}</p>
                                    <p>{cant}</p>
                                </div>
                            ))} 
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
