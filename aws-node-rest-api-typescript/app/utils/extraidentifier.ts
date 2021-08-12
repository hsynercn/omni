import { Employee } from "../model/employee";

export class ExtraIdentifier {
    static isExtraIdRequired(region: string){
        if(typeof process.env.ADDITIONAL_IDENTIFIER_REGIONS === 'string') {
            let regionList = process.env.ADDITIONAL_IDENTIFIER_REGIONS.split(' ');
            for(let i=0; i<regionList.length; i++){
                if(regionList[i].toUpperCase() === region.toUpperCase()) {
                    return true;
                }
            }
        }
        return false;
        
    }
    static generateId(employee: Employee){
        return employee.firstName.toLowerCase() + employee.lastName.toLowerCase() + employee.dateOfBirth.replace(/[^A-Za-z0-9]/g,"");
    }
}
