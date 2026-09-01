import { useParams } from "react-router";
import { Card } from "../../layout/Card";

export const CountryPage = () => {
    const { code } = useParams();
    console.log(code)
    return (
        <>
            <div className="">{code}</div>
        
        </>
    );
};
