import { expect } from 'chai';
import { ObjectListValidator } from '../app/utils/objectlistvalidator';
import { empRoy } from './employee.mock';

describe('ObjectListValidator', () => {

    describe('#CountryService', () => {
        it('returns false for null input', async () => {
            let result = ObjectListValidator.isValidInput(null)
            expect(result).to.equal(false);
        });

        it('returns false for undefined input', async () => {
            let result = ObjectListValidator.isValidInput(undefined)
            expect(result).to.equal(false);
        });

        it('returns false for not array input', async () => {
            let result = ObjectListValidator.isValidInput({})
            expect(result).to.equal(false);
        });

        it('returns false for empty array input', async () => {
            let result = ObjectListValidator.isValidInput([])
            expect(result).to.equal(false);
        });

        it('returns false for missing fields', async () => {
            let result = ObjectListValidator.isValidInput([{firstName:"firstName"}])
            expect(result).to.equal(false);
        });

        it('returns true for array input', async () => {
            let result = ObjectListValidator.isValidInput([empRoy, empRoy, empRoy])
            expect(result).to.equal(true);
        });

    });

});