import Skeleton from "react-loading-skeleton";

export const CardSkeleton = () => {
    const buttons = [
        "Americas",
        "Antartic",
        "Africa",
        "Asia",
        "Europe",
        "Oceania",
    ];
    return (
        <div>
            <div className="w-full   flex flex-col md:grid md:grid-cols-12 md:items-baseline-last mb-4">
                <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-8">
                    <Skeleton count={1} width={120} />
                </p>
                <div className="col-span-4">

                <Skeleton  className="w-full  p-2 gap-2  rounded-lg bg-border-primary text-text-primary flex items-center "/>
                </div>
            </div>
            <div className="w-full md:grid grid-cols-12">
                <div className=" md:col-span-2">
                    {/* sort by */}
                    <div className="w-full flex flex-col">
                        <label
                            className="text-xs font-bold mb-4"
                            htmlFor="selector"
                        >
                            <Skeleton count={1} width={40} />
                        </label>
                        <Skeleton width={140} height={32} />
                    </div>
                    {/* Region */}
                    <div className="mt-4">
                        <label className="text-xs font-bold mb-2">
                            <Skeleton count={1} width={40} />
                        </label>
                        <div>
                            {buttons.map((btn) => (
                                <button
                                    className={`m-1 text-sm  font-primary font-medium    rounded-xl cursor-pointer`}
                                >
                                    <Skeleton
                                        width={btn.length * 10}
                                        className="h-5"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* menbers */}
                    <h3 className="mt-4 text-xs font-bold">
                        <Skeleton width={"status".length * 10} />
                    </h3>
                    <Skeleton width={140} height={32} />
                    <Skeleton width={140} height={32} />
                </div>
                
            </div>
        </div>
    );
};

{
    /* <div>
                    <div className="w-full   flex flex-col md:grid md:grid-cols-12 md:items-baseline-last mb-4">
                        <p className="text-sm font-bold mb-6 whitespace-nowrap col-span-8">
                            Found {total} countris
                        </p>
                        <SearchInput
                            setSearch={setSearch}
                            search={search}
                            gridClass={"col-span-4"}
                        />
                    </div>
                    <div className="w-full md:grid grid-cols-12">
                        <div className=" md:col-span-2">
                            <SortBy />
                            <SortRegion />
                            <SortMember />
                        </div>
                        {countrys.length > 0 && (
                            <CountrySection
                                titles={titles}
                                countrys={countrys}
                            />
                        )}
                        {total > 25 && (
                                <button
                                    className="w-full mt-4 text-lg font-bold flex justify-center md:col-start-3 md:col-span-10 hover:underline hover:cursor-pointer"
                                    onClick={() => {
                                        setPage(page + 1);
                                    }}
                                >
                                    view more countrys
                                </button>
                        )}
                    </div>
                </div> */
}
