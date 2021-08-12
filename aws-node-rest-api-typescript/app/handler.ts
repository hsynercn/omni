import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { CountryController } from './controller/countries';
import { Employee } from './model/employee';
import { ObjectListValidator } from './utils/inputvalidator';
const countryController = new CountryController();

export const getCountyData: Handler = (event: Employee[]) => {

  if (!ObjectListValidator.isValidInput(event)) {
    return new Promise(function (resolve) {
      resolve({ statusCode: 400, body: "Invalid input object, required format is an object list" });
    });
  }
  console.log("VALID INPUT");
  return countryController.findByCodeList(event);
}
