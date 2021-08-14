import { Employee } from "../app/model/employee";

export const empSmallCase: Employee = {
    firstName: "firstname",
    lastName: "lastname",
    dateOfBirth: "date",
    country: "country1"
}

export const empUpperCase: Employee = {
    firstName: "FIRSTNAME",
    lastName: "LaStNaMe",
    dateOfBirth: "date",
    country: "country2"
}

export const empSpecialChars: Employee = {
    firstName: "FiRst",
    lastName: "LaSt",
    dateOfBirth: "1/2/3/4/5",
    country: "country3"
}

export const empSpecialCharMix: Employee = {
    firstName: "FiRst",
    lastName: "LaSt",
    dateOfBirth: "////-*/?!",
    country: "country4"
}

export const empEmptyCountry: Employee = {
    firstName: "FiRst",
    lastName: "LaSt",
    dateOfBirth: "////-*/?!",
    country: ""
}

export const empRoy: Employee = {
    firstName: "Roy",
    lastName: "Testerton",
    dateOfBirth: "19/02/1990",
    jobTitle: "Software developer",
    company: "Test co",
    country: "US"
}

export const empLisa: Employee = {
    firstName: "Lisa",
    lastName: "Testora",
    dateOfBirth: "11/07/1984",
    jobTitle: "CTO",
    company: "Test co",
    country: "GBR"
}

export const empSimon: Employee = {
    firstName: "Simon",
    lastName: "McTester",
    dateOfBirth: "01/11/1987",
    jobTitle: "Product manager",
    company: "Mock industries",
    country: "IND"
}

export const empSelina: Employee = {
    firstName: "Selina",
    lastName: "Testo",
    dateOfBirth: "23/11/1972",
    jobTitle: "Software developer",
    company: "Mock industries",
    country: "IND"
}

export const empTim: Employee = {
    firstName: "Tim",
    lastName: "Mockman",
    dateOfBirth: "12/11/1972",
    jobTitle: "Software developer",
    company: "Mock industries",
    country: "IND"
}

export const empMelissa: Employee = {
    firstName: "Melissa",
    lastName: "Mocker",
    dateOfBirth: "10/01/1982",
    jobTitle: "Software developer",
    company: "Mock industries",
    country: "US"
}

export const empEmptyString: Employee = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    jobTitle: "",
    company: "",
    country: ""
}


export const shortEmployeeList: Employee[] = [empSmallCase, empUpperCase, empSpecialChars, empSpecialCharMix];

export const emptyCntEmployeeList: Employee[] = [empSmallCase, empEmptyCountry];

export const royLisaSimonEmployeeList: Employee[] = [empRoy, empLisa, empSimon];

export const mixedIdEmployeeList: Employee[] = [empRoy, empSimon];

export const emptyStringCountryEmployeeList: Employee[] = [empRoy, empSimon, empEmptyString];