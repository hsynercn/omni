export class ObjectListValidator {
    static isValidInput(input: any) {
        if (input !== null && typeof input === 'object' && Array.isArray(input)) {

            var invalidType = false;
            input.forEach(function (item) {
                if (!('firstName' in item && typeof item.firstName === 'string' &&
                    'lastName' in item && typeof item.lastName === 'string' &&
                    'dateOfBirth' in item && typeof item.dateOfBirth === 'string' &&
                    'country' in item && typeof item.country === 'string')) {
                    invalidType = true;
                }
            })
            if (!invalidType && input.length > 0) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
}
