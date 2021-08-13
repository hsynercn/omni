import { expect } from 'chai';
import { CountryService } from "../app/service/countriesapi";
import * as countriesMock from './countriesapi.mock';

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

describe('CountryService', () => {

    before(function () {
        var mock = new MockAdapter(axios);

        process.env.REST_COUNTRIES = "";
        mock.onGet("/all").reply(200, countriesMock.getAll);
        mock.onGet("/name/eesti").reply(200, countriesMock.getNameEesti);
        mock.onGet("/alpha/col").reply(200, countriesMock.getByCodeCol);
        mock.onGet("/alpha?codes=col;no;ee").reply(200, countriesMock.getByCodeListColNoEe);
    });

    describe('#getAll', async () => {
        it('returns url mapped mock list', async () => {

            let countryService = new CountryService();
            let receivedList = await countryService.getAll();

            expect(countriesMock.getAll).to.eql(receivedList);
        });
    });

    describe('#getName', async () => {
        it('returns url mapped mock list', async () => {

            let countryService = new CountryService();
            let receivedList = await countryService.getByName("eesti");

            expect(countriesMock.getNameEesti).to.eql(receivedList);
        });
    });

    describe('#getByCode', async () => {
        it('returns url mapped mock list', async () => {

            let countryService = new CountryService();
            let receivedList = await countryService.getByCode("col");

            expect(countriesMock.getByCodeCol).to.eql(receivedList);
        });
    });

    describe('#getByCodeList', async () => {
        it('returns url mapped mock list', async () => {

            let countryService = new CountryService();
            let receivedList = await countryService.getByCodeList(["col", "no", "ee"]);

            expect(countriesMock.getByCodeListColNoEe).to.eql(receivedList);
        });
    });
});