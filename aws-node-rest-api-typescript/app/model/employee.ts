import { EmployeeCountry } from "./employeecountry";

export interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  jobTitle?: string;
  company?: string;
  country: string;
  employeeCountry?: EmployeeCountry;
  softIdentifier?: string;
}
