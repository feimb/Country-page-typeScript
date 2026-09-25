import api from "./api/api";

async function getCountrys(query?: string) {
    try {
        const response = await api.get("", {
            params: {
                q: query,
            },
        });
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

export default getCountrys;
