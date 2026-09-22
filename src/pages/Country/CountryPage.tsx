import { useParams } from "react-router";
import { CountryDataRow } from "./components/CountryDataRow";
import { useCountry } from "../../hooks/useCountry";
import { NeighbouringCountry } from "./components/NeighbouringCountry";
export const CountryPage = () => {
    const { code } = useParams<{ code: string | undefined }>();
    const { country, loading } = useCountry(code);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!country) {
        return <div>Country not found</div>;
    }
    const arrMetaData: Array<{
        nameData: string;
        cant: number;
    }> = [
        {
            nameData: "Population",
            cant: country.population,
        },
        {
            nameData: "Area (km²)",
            cant: country.area.kilometers,
        },
    ];
    const countryData: Array<{ title: string; content: string | string[] }> = [
        {
            title: "Capital",
            content: country.capitals.map((capital: any) => capital.name),
        },
        {
            title: "Subregion",
            content: country.subregion,
        },
        {
            title: "Language",
            content: country.languages.map((lang: any) => lang.name),
        },
        {
            title: "Currencies",
            content: country.currencies.map((curr: any) => curr.name),
        },
        { title: "Continents", content: country.continents },
    ];
    console.log(country);
    return (
        <>
            <div className="w-full flex  justify-center ">
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
                        <h4 className="text-sm">{country.names.official}</h4>
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
                    <div className="w-full  mt-8 ">
                        {countryData.map(({ title, content }) => {
                            return (
                                <CountryDataRow
                                    title={title}
                                    content={content}
                                    key={title}
                                />
                            );
                        })}
                    </div>
                    <div className="w-full p-4 mb-8">
                        <h3>Neighbouring Countries</h3>
                        <div className="flex gap-4 py-2">
                            {country.borders.map(
                                (border: string, index: number) => (
                                    <NeighbouringCountry
                                        code={border}
                                        key={border}
                                        delay={index * 1000}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
