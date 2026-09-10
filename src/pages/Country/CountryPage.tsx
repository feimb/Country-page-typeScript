import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCountry from "../../services/getCountry";

export const CountryPage = () => {
    const { code } = useParams<{ code: string | undefined }>();
    const [country, setCountry] = useState<any>(null);

    const [arrMetaData, setArrMetaData] = useState<
        Array<{ nameData: string; cant: number }>
    >([]);

    useEffect(() => {
        if (!code) return;
        const fetchCountry = async () => {
            const data = await getCountry(code);

            const infoCountry = await data.data.objects[0]
            console.log(data.data.objects[0]);
            setArrMetaData([
                {
                    nameData: "Population",
                    cant: infoCountry.population,
                },
                { nameData: "Area (km²)", cant: infoCountry.area.kilometers },
            ]);
            setCountry(infoCountry);

        };
        fetchCountry();
    }, []);
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
                            {arrMetaData.length != 0 &&
                                arrMetaData.map(
                                    ({
                                        nameData,
                                        cant,
                                    }: {
                                        nameData: string;
                                        cant: number;
                                    }) => (
                                        <div>
                                            <p>{nameData}</p>
                                            <p>{cant}</p>
                                        </div>
                                    ),
                                )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
