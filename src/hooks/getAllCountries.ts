import getCountrys from "../services/getCountrys";

async function getAllCountries() {
    const limit = 100;
    let offset = 0;
    let allCountries: any[]=[];
    let hasMore = true;
    let metaData:any[]= [];
    while(hasMore){
        const response = await getCountrys(limit, offset, "","")

        const data = response.data;
        
        allCountries.push(...data.objects);

        hasMore = data.meta.more;
        offset += limit;
        if(!hasMore){
            metaData = data.meta;
        }
    }
    
    return {allCountries, metaData};
}

export default getAllCountries;