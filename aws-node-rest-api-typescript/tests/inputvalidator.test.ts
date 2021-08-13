import { expect } from 'chai';
import { ObjectListValidator } from '../app/utils/inputvalidator';

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

        it('returns true for array input', async () => {
            let result = ObjectListValidator.isValidInput([{}, {}, {}])
            expect(result).to.equal(true);
        });

    });

});