import api from "./api/api";

async function getCountrys(limit:number, offset:number, query?: string | null) {
    try {
        const response = await api.get("", {
            params: {
                limit: limit,
                offset: offset, 
                q: query,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export default getCountrys;
