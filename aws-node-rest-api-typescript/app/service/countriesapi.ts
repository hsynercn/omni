import { Country } from "../model/countryInterface";

const axios = require('axios');

export class CountryService {

    rootUrl: string = process.env.REST_COUNTRIES as string;

    async getAll() {
        const data = await axios.get(this.rootUrl + "/all");
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByName(name: string) {
        const data = await axios.get(this.rootUrl + "/name/" + name);
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByCode(code: string) {
        const data = await axios.get(this.rootUrl + "/alpha/" + code);
        const responseList: Country[] = data.data;
        return responseList;
    }

    async getByCodeList(codes: string[]) {
        const data = await axios.get(this.rootUrl + "/alpha?codes=" + codes.join(";"));
        const responseList: Country[] = data.data;
        return responseList;
    }
}


