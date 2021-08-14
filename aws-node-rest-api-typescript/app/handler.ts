import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

import { CountryController } from './controller/countrycontroller';
import { Employee } from './model/employee';
import { ObjectListValidator } from './utils/objectlistvalidator';
const countryController = new CountryController();

export const getCountyData = (event: Employee[]) => {

  if (!ObjectListValidator.isValidInput(event)) {
    return new Promise(function (resolve) {
      resolve({ statusCode: 400, body: "Invalid input object, required format is an employee list" });
    });
  }

  return countryController.findByCodeList(event);
}
