import getCountrys from "../services/getCountrys";

async function getAllCountries() {
    const limit = 100;
    let offset = 0;
    let allCountries: any[]=[];
    let hasMore = true;

    while(hasMore){
        const response = await getCountrys(limit, offset, "","")

        const data = response.data;
        allCountries.push(...data.objects);

        hasMore = data.meta.more;
        offset += limit;
    }

    return allCountries;
}

export default getAllCountries;