import { useEffect, useState } from "react";
import getCountry from "../services/getCountry";
export const useCountry = (code: string | undefined) => {
    const [country, setCountry] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!code) return;
        const fetchCountry = async () => {
            try {
                const data = await getCountry(code);
                setCountry(data.data.objects[0]);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCountry();
    }, [code]);

    return { country, loading };
};
