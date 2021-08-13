export interface EmployeeCountry {
  name: string
  currencies: Currency[]
  languages: Language[]
  timezones: string[]
}

export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}