import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getCountry from "../../services/getCountry";

export const CountryPage = () => {
    const { code } = useParams<string>();
    const [country, setCountry] = useState<any>(null);
    useEffect(()=>{
        const fetchCountry = async (code:string) =>{
            const data = await getCountry(code);

            console.log(data);
            setCountry(data);
        }
        fetchCountry(code);
    },[])
    return (
        <>
           <div></div>
        </>
    );
};
