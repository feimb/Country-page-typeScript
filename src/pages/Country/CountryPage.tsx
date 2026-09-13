import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCountry from "../../services/getCountry";
import { CountryDataRow } from "./components/CountryDataRow";

export const CountryPage = () => {
    const { code } = useParams<{ code: string | undefined }>();
    const [country, setCountry] = useState<any>(null);
    const [arrMetaData, setArrMetaData] = useState<
        Array<{ nameData: string; cant: number }>
    >([]);
    const [countryData, setDataCountry] = useState<
        Array<{ title: string; content: string | string[] }>
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
            setDataCountry([
                {
                    title: "Capital",
                    content: infoCountry.capitals.map((capital:any)=> capital.name),
                },
                {
                    title: "Subregion",
                    content: infoCountry.subregion,
                },
                {
                    title: "Language",
                    content: infoCountry.languages.map((lang:any)=> lang.name),
                },
                {
                    title: "Currencies",
                    content: infoCountry.currencies.map((curr:any) => curr.name),
                },
                { title: "Continents", content: infoCountry.continents},
            ]);
            setCountry(infoCountry);
        };
        fetchCountry();
    }, []);

    return (
        <>
            <div className="w-full flex  justify-center ">
                {country && (
                    <div className="w-full flex flex-col items-center ">
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
                                        <div
                                            key={nameData}
                                            className="p-3 bg-border-primary rounded-lg flex items-center gap-2"
                                        >
                                            <p className="pr-2 text-sm border-r border-primary">
                                                {nameData}
                                            </p>
                                            <p className="">{cant}</p>
                                        </div>
                                    ),
                                )}
                        </div>
                        <div className="w-full   mt-8 ">
                            {countryData.map(({title,content})=>{
                                return(
                                    <CountryDataRow title={title} content={content} key={title} />
                                )
                            })}
                            
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
