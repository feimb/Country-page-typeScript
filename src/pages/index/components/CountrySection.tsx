import { CountryRow } from "./subComponents/CountryRow";


export const CountrySection = ({titles, countrys}:{titles:Array<string>, countrys:any}) => {
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
                <tbody className="border-separate border-spacing-y-4">
                    {countrys.map((country: any) => (
                        <CountryRow
                            key={country.codes.alpha_3}
                            country={country}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    );
};
