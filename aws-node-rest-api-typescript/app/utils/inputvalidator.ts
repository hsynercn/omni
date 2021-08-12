export class ObjectListValidator {
    static isValidInput(input: any){
        if(input !== null && typeof input === 'object' && Array.isArray(input)) {
            return true;
        } else {
            return false;
        }
    }
}
