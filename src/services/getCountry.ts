import api from "./api/api"


async function getCountry(code:string) {
    try{
        const response = await api.get(`codes.alpha_3/${code}`);
        return response.data
    }catch(err){
        console.error(err)
    }

}

export default getCountry