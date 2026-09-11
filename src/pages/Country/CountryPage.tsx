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

            const infoCountry = await data.data.objects[0];
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
            <div className="w-full flex  justify-center ">
                {country && (
                    <div>
                        <img
                            src={country.flag.url_png}
                            alt=""
                            className=" w-65 -mt-16 rounded-lg flex mx-auto"
                        />
                        <div className="text-center mt-6">
                            <h3 className="text-lg font-bold">
                                {country.names.common}
                            </h3>
                            <h4 className="text-sm">
                                {country.names.official}
                            </h4>
                        </div>
                        <div className="mt-6 flex gap-8">
                            {arrMetaData.length != 0 &&
                                arrMetaData.map(
                                    ({
                                        nameData,
                                        cant,
                                    }: {
                                        nameData: string;
                                        cant: number;
                                    }) => (
                                        <div key={nameData} className="p-3 bg-border-primary rounded-lg flex items-center gap-2">
                                            <p className="pr-2 text-sm border-r border-primary">{nameData}</p>
                                            <p className="">{cant}</p>
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
