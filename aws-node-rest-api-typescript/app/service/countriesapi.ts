import { Country } from "../model/countryInterface";

const axios = require('axios');

export class CountryService{
    async getAll () {
        const data = await axios.get("https://restcountries.eu/rest/v2/all");
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByName (name: string) {
        const data = await axios.get("https://restcountries.eu/rest/v2/name/" + name);
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByCode (code: string) {
        const data = await axios.get("https://restcountries.eu/rest/v2/alpha/" + code);
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByCodeList (codes: string[]) {
        const data = await axios.get("https://restcountries.eu/rest/v2/alpha?codes=" + codes.join(";"));
        const responseList: Country[] = data.data;
        return responseList;
    }
}


