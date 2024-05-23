import axios from "axios"

 
const useAxios = () => {
    const axiosToken = axios.create({
        baseURL:process.env.REACT_APP_TMDB_BASE_URL,
        headers:{
            Authorization:"Bearer " +process.env.REACT_APP_TMDB_TOKEN
        }
    })
  return {axiosToken}
}

export default useAxios