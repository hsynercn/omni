import { Country } from '../model/countryInterface';
import { Employee } from '../model/employee';
import { EmployeeCountry } from '../model/employeecountry';
import { CountryService } from '../service/countriesapi';
import { ExtraIdentifier } from '../utils/extraidentifier';
import { MessageUtil } from '../utils/message';

export class CountryController {
  countryService: CountryService;
  constructor() {
    this.countryService = new CountryService();
  }

  /**
   * Search by country name. It can be the native name or partial name
   */
  async findByCodeList(employeeList: Employee[]) {
    try {

      let countryCodes: string[] = [];
      employeeList.forEach((employee) => {
        if (employee.hasOwnProperty("country")) {
          countryCodes.push(employee.country);
        }
      });

      console.log("EXTRACTED CODES:" + countryCodes);

      const fetchedCountryList = await this.countryService.getByCodeList(countryCodes);

      let countryCodeMap = new Map();


      fetchedCountryList.forEach(country => {
        countryCodeMap.set(country.alpha2Code, country);
        countryCodeMap.set(country.alpha3Code, country);
      });

      console.log("GENERATED countryCodeMap");

      employeeList.forEach((employee) => {
        if ("country" in employee) {
          console.log("employee.country: " + employee.country);
          let tmpCountry: Country = countryCodeMap.get(employee.country);
          let emplCountry: EmployeeCountry = { 
            name: tmpCountry.name, 
            currencies: tmpCountry.currencies,
            languages: tmpCountry.languages,
            timezones: tmpCountry.timezones
          };
          console.log("emplCountry: " + JSON.stringify(emplCountry));
          employee.employeeCountry = emplCountry;
          if(ExtraIdentifier.isExtraIdRequired(tmpCountry.region)) {
            console.log("EXTRA ID IS REGUIRED")
            employee.softIdentifier = ExtraIdentifier.generateId(employee);
            console.log("employee.softIdentifier: " + employee.softIdentifier);
          }
        }
      });

      return MessageUtil.success(employeeList);
    } catch (err) {
      return MessageUtil.error(err.code, err.message);
    }
  }
}