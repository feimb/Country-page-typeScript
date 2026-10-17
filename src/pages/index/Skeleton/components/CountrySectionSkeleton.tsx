import Skeleton from "react-loading-skeleton";

export const CountrySectionSkeleton = () => {
    const titles: Array<string> = [
        "Flag",
        "Name",
        "Population",
        "Area (km²)",
        "Region",
    ];
    const columns = ["", "", "", ""];
    return (
        <section className="mt-8 md:mt-0 col-span-10 md:px-8 border-separate border-spacing-y-4">
            <table className="w-full h-full ">
                <thead className=" ">
                    <tr className="text-xs font-bold  ">
                        {titles.map((title) => (
                            <td
                                className="pb-4 border-b-2  border-border-primary"
                                key={title}
                            >
                                {title}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-spacing-0 ">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <tr className=" border-transparent " key={index}>
                            <td className="w-0 pr-4 ">
                                <Skeleton width={56} height={32} className=""/>
                            </td>
                            {columns.map((item) => (
                                <td key={item} className="py-auto">
                                    <Skeleton width={140} height={16}/>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
