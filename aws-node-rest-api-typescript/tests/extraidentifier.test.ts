import { expect } from 'chai';
import { Employee } from '../app/model/employee';
import { ExtraIdentifier } from '../app/utils/extraidentifier';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('ExtraIdentifier', () => {

  describe('generateId', () => {
    
    it('returns concatenated fields ', () => {
      const emp:Employee = {
        firstName:"firstname",
        lastName:"lastname",
        dateOfBirth:"date",
        country:"country"
      } 
      const result = ExtraIdentifier.generateId(emp);
      expect(result).to.equal(emp.firstName + emp.lastName + emp.dateOfBirth);
    });

    it('returns lowercase concatenated fields with case insensitive inputs', () => {
      const emp:Employee = {
        firstName:"FIRSTNAME",
        lastName:"LaStNaMe",
        dateOfBirth:"date",
        country:"country"
      } 
      const result = ExtraIdentifier.generateId(emp);
      expect(result).to.equal(emp.firstName.toLowerCase() + emp.lastName.toLowerCase() + emp.dateOfBirth);
    });

    it('returns concatenated fields with special char inputs', () => {
      const emp:Employee = {
        firstName:"FiRst",
        lastName:"LaSt",
        dateOfBirth:"1/2/3/4/5",
        country:"country"
      } 
      const result = ExtraIdentifier.generateId(emp);
      expect(result).to.equal(emp.firstName.toLowerCase() + emp.lastName.toLowerCase() + emp.dateOfBirth.replace(/[^A-Za-z0-9]/g,""));
    });

    it('returns concatenated fields with only special char inputs', () => {
      const emp:Employee = {
        firstName:"FiRst",
        lastName:"LaSt",
        dateOfBirth:"////",
        country:"country"
      } 
      const result = ExtraIdentifier.generateId(emp);
      expect(result).to.equal(emp.firstName.toLowerCase() + emp.lastName.toLowerCase() + emp.dateOfBirth.replace(/[^A-Za-z0-9]/g,""));
    });
  });


  describe('isExtraIdRequired', () => {

    it('returns false for not given ADDITIONAL_IDENTIFIER_REGIONS', () => {
      const result = ExtraIdentifier.isExtraIdRequired("");
      expect(result).to.equal(false);
    });
  
    it('returns false for empty input region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = ExtraIdentifier.isExtraIdRequired("");
      expect(result).to.equal(false);
    });
  
    it('returns false for outer region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = ExtraIdentifier.isExtraIdRequired("Afric");
      expect(result).to.equal(false);
    });
  
    it('returns true for inner region', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = ExtraIdentifier.isExtraIdRequired("Africa");
      expect(result).to.equal(true);
    });
  
    it('returns true for inner region case insensitive', () => {
      process.env.ADDITIONAL_IDENTIFIER_REGIONS = "Africa Americas Asia";
      const result = ExtraIdentifier.isExtraIdRequired("aSIA");
      expect(result).to.equal(true);
    });
  
  });
});

