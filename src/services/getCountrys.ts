import api from "./api/api"


async function getCountrys() {
    try{
        const response = await api.get("");
        return response.data
    }catch(err){
        console.error(err)
    }

}

export default getCountrys