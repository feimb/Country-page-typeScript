import api from "./api"


async function getCountry() {
    try{
        const response = await api.get("");
        return response.data
    }catch(err){
        console.error(err)
    }

}

export default getCountry