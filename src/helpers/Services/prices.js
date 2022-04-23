import Axios from "axios"

export const getPrices = async(currency) =>(
    Axios.get(`https://coinlib.io/api/v1/coinlist?key=${process.env.REACT_APP_API}&pref=${currency}&page=1&order=volume_desc`)
)
