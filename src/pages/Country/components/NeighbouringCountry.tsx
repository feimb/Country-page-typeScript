import { useCountry } from "../../../hooks/useCountry";
import { Link } from "react-router";
export const NeighbouringCountry = ({
    code,
    delay = 0,
}: {
    code: string;
    delay: number | undefined;
}) => {
    const { country, loading } = useCountry(code, delay);
    if (loading) {
        return <div>esta Cargando</div>;
    }
    if (!country) {
        return null;
    }
    return (
        <Link to={`/${country.codes.alpha_3}`} >
            <div className=" flex flex-col items-center ">
                <img src={country.flag.url_png} alt=""  className="h-16 w-24 rounded-md"/>
                <p className="text-xs mt-2 font-medium">{country.names.common}</p>
            </div>
        </Link>
    );
};
