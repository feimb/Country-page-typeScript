export const CountryRow = ({ country }: any) => {
    const columns:Array<string> =[country.names.common, country.population, country.area.kilometers, country.region]
    return (
        <tr className=" border-transparent  ">
            <td className="py-1.5">
                <img
                    src={country.flag?.url_png}
                    alt=""
                    className="w-12 rounded"
                />
            </td>
            {columns.map((item)=>(
                <td>
                    {item}
                </td>
            ))}
        </tr>
    );
};
