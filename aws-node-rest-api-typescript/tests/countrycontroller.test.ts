import { CountryController } from "../app/controller/countries";
import { royLisaSimonEmployeeList,mixedIdEmployeeList } from "./employee.mock";
import * as countriesMock from './countriesapi.mock';
import { royLisaSimonResponse,mixedIDResponse } from "./message.mock";
import { expect } from "chai";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe('CountryController', () => {

    describe('#CountryService', async () => {

        it('returns roy lisa simon response group', async () => {
            var mock = new MockAdapter(axios);
            mock.onGet("/alpha?codes=US;GBR;IND").reply(200, countriesMock.getUsGbrInd);
            process.env.REST_COUNTRIES = "";
            process.env.ADDITIONAL_IDENTIFIER_REGIONS = "";

            let countryController: CountryController = new CountryController();
            let result = await countryController.findByCodeList(royLisaSimonEmployeeList);
            expect(result).to.eql(royLisaSimonResponse);
        });

        it('returns mixed id response group', async () => {
            var mock = new MockAdapter(axios);
            mock.onGet("/alpha?codes=US;IND").reply(200, countriesMock.getUsInd);
            process.env.REST_COUNTRIES = "";
            process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Asia";
            
            let countryController: CountryController = new CountryController();
            let result = await countryController.findByCodeList(mixedIdEmployeeList);
            expect(result).to.eql(mixedIDResponse);
        });

    });
});