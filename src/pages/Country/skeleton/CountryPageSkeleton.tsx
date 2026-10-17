import Skeleton from "react-loading-skeleton";
import { NeighbouringCountrySkeleton } from "./components/NeighbouringCountrySkeleton";

export const CountryPageSkeleton = () => {
    const arrMetaData: Array<{
        nameData: string;
        cant: string;
    }> = [
        {
            nameData: "Population",
            cant: "1000000",
        },
        {
            nameData: "Area (km²)",
            cant: "1000000",
        },
    ];

    const countryData: Array<{ title: string; content: string | string[] }> = [
        {
            title: "Capital",
            content: "uwuwuwu",
        },
        {
            title: "Subregion",
            content: "uwuwuwu",
        },
        {
            title: "Language",
            content: "uwuwuwu",
        },
        {
            title: "Currencies",
            content: "uwuwuwu",
        },
        { title: "Continents", content: "uwuwuwu" },
    ];
    return (
        <>
            <div className="w-full flex  justify-center ">
                <div className="w-full flex flex-col items-center ">
                    <div className="w-65 -mt-16 rounded-lg flex mx-auto">
                        <Skeleton width={260} height={180} />
                    </div>
                    <div className="text-center mt-6">
                        <h3 className="text-lg font-bold">
                            <Skeleton width={120} />
                        </h3>
                        <h4 className="text-sm">
                            <Skeleton width={160} />
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
                                    cant: string;
                                }) => (
                                    <div
                                        key={nameData}
                                        className="p-3 bg-border-primary rounded-lg flex items-center gap-2"
                                    >
                                        <p className="pr-2 text-sm border-r border-primary">
                                            {nameData}
                                        </p>
                                        <Skeleton width={cant.length * 12} />
                                    </div>
                                ),
                            )}
                    </div>
                    <div className="w-full  mt-8 ">
                        {countryData.map(({ title, content }) => {
                            return (
                                <div className="w-full p-4 flex justify-between border border-border-primary ">
                                    <p>{title}</p>
                                    <Skeleton width={content.length * 20} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full p-4 mb-8 ">
                        <h3>Neighbouring Countries</h3>
                        <div className="flex gap-x-4 py-2 flex-wrap ">
                 
                            {Array.from({ length: 5 }).map((_, index) => (
                                <NeighbouringCountrySkeleton/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
