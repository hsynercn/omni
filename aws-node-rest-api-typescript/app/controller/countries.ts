import { Country } from '../model/countryInterface';
import { Employee } from '../model/employee';
import { EmployeeCountry } from '../model/employeecountry';
import { CountryService } from '../service/countriesapi';
import { EmployeeUtil } from '../utils/employeeutil';
import { MessageUtil } from '../utils/message';

export class CountryController {
  countryService: CountryService;
  constructor() {
    this.countryService = new CountryService();
  }

  async findByCodeList(employeeList: Employee[]) {
    try {

      let countryCodes: string[] = EmployeeUtil.extractCountryCodes(employeeList);

      const fetchedCountryList = await this.countryService.getByCodeList(countryCodes);

      let countryCodeMap = new Map();

      fetchedCountryList.forEach(country => {
        countryCodeMap.set(country.alpha2Code, country);
        countryCodeMap.set(country.alpha3Code, country);
      });

      employeeList.forEach((employee) => {
        if ("country" in employee) {
          let tmpCountry: Country = countryCodeMap.get(employee.country);
          let emplCountry: EmployeeCountry = {
            name: tmpCountry.name,
            currencies: tmpCountry.currencies,
            languages: tmpCountry.languages,
            timezones: tmpCountry.timezones
          };
          employee.employeeCountry = emplCountry;
          if (EmployeeUtil.isExtraIdRequired(tmpCountry.region)) {
            employee.softIdentifier = EmployeeUtil.generateId(employee);
          }
        }
      });

      return MessageUtil.success(employeeList);
    } catch (err) {
      return MessageUtil.error(err.code, err.message);
    }
  }
}