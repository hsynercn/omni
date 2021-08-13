import { expect } from 'chai';
import { EmployeeUtil } from '../app/utils/employeeutil';
import { empSmallCase, empSpecialCharMix, empSpecialChars, emptyCntEmployeeList, empUpperCase, shortEmployeeList } from './employee.mock';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('EmployeeUtil', () => {

  describe('#extractCountryCodes', () => {

    it('returns extracted county codes, all codes exist', () => {
      const result = EmployeeUtil.extractCountryCodes(shortEmployeeList);
      const expected: string[] = ["country1", "country2", "country3", "country4"];
      expect(result).to.have.members(expected);
    });

    it('returns extracted county codes, empty string codes exist', () => {
      const result = EmployeeUtil.extractCountryCodes(emptyCntEmployeeList);
      const expected: string[] = ["country1", ""];
      expect(result).to.have.members(expected);
    });

  });

  describe('#isExtraIdRequired', () => {

    it('returns false for not given ADDITIONAL_IDENTIFIER_REGIONS', () => {
      const result = EmployeeUtil.isExtraIdRequired("");
      expect(result).to.equal(false);
    });

    it('returns false for empty reegion list string', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = EmployeeUtil.isExtraIdRequired("");
      expect(result).to.equal(false);
    });

    it('returns false for empty input region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = EmployeeUtil.isExtraIdRequired("");
      expect(result).to.equal(false);
    });

    it('returns false for outer region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = EmployeeUtil.isExtraIdRequired("Afric");
      expect(result).to.equal(false);
    });

    it('returns true for inner region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = EmployeeUtil.isExtraIdRequired("Africa");
      expect(result).to.equal(true);
    });

    it('returns true for inner region case insensitive', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = EmployeeUtil.isExtraIdRequired("aSIA");
      expect(result).to.equal(true);
    });

  });

  describe('#generateId', () => {

    it('returns concatenated fields ', () => {
      const result = EmployeeUtil.generateId(empSmallCase);
      expect(result).to.equal(empSmallCase.firstName + empSmallCase.lastName + empSmallCase.dateOfBirth);
    });

    it('returns lowercase concatenated fields with case insensitive inputs', () => {
      const result = EmployeeUtil.generateId(empUpperCase);
      expect(result).to.equal(empUpperCase.firstName.toLowerCase() + empUpperCase.lastName.toLowerCase() + empUpperCase.dateOfBirth);
    });

    it('returns concatenated fields with special char inputs', () => {
      const result = EmployeeUtil.generateId(empSpecialChars);
      expect(result).to.equal(empSpecialChars.firstName.toLowerCase() + empSpecialChars.lastName.toLowerCase() + empSpecialChars.dateOfBirth.replace(/[^A-Za-z0-9]/g, ""));
    });

    it('returns concatenated fields with only special char inputs', () => {
      const result = EmployeeUtil.generateId(empSpecialCharMix);
      expect(result).to.equal(empSpecialCharMix.firstName.toLowerCase() + empSpecialCharMix.lastName.toLowerCase() + empSpecialCharMix.dateOfBirth.replace(/[^A-Za-z0-9]/g, ""));
    });
  });
});

