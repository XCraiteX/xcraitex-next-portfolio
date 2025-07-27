import { API_URL } from "@/config"
import axios from "axios"

export namespace api{
    export const get = async (endpoint: string) => {
        return (await axios.get(API_URL + endpoint)).data
    }

    export const get_visits = async () => {
        return (await get('visits'))
    }
}