import { ResponseVO } from "../app/model/vo/responseVo";

export const royLisaSimonResponse: ResponseVO = {
   statusCode: 200,
   body: JSON.stringify(
      {
         "code": 0,
         "message": "success",
         "data": [
            {
               "firstName": "Roy",
               "lastName": "Testerton",
               "dateOfBirth": "19/02/1990",
               "jobTitle": "Software developer",
               "company": "Test co",
               "country": "US",
               "employeeCountry": {
                  "name": "United States of America",
                  "currencies": [
                     {
                        "code": "USD",
                        "name": "United States dollar",
                        "symbol": "$"
                     }
                  ],
                  "languages": [
                     {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                     }
                  ],
                  "timezones": [
                     "UTC-12:00",
                     "UTC-11:00",
                     "UTC-10:00",
                     "UTC-09:00",
                     "UTC-08:00",
                     "UTC-07:00",
                     "UTC-06:00",
                     "UTC-05:00",
                     "UTC-04:00",
                     "UTC+10:00",
                     "UTC+12:00"
                  ]
               }
            },
            {
               "firstName": "Lisa",
               "lastName": "Testora",
               "dateOfBirth": "11/07/1984",
               "jobTitle": "CTO",
               "company": "Test co",
               "country": "GBR",
               "employeeCountry": {
                  "name": "United Kingdom of Great Britain and Northern Ireland",
                  "currencies": [
                     {
                        "code": "GBP",
                        "name": "British pound",
                        "symbol": "£"
                     }
                  ],
                  "languages": [
                     {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                     }
                  ],
                  "timezones": [
                     "UTC-08:00",
                     "UTC-05:00",
                     "UTC-04:00",
                     "UTC-03:00",
                     "UTC-02:00",
                     "UTC",
                     "UTC+01:00",
                     "UTC+02:00",
                     "UTC+06:00"
                  ]
               }
            },
            {
               "firstName": "Simon",
               "lastName": "McTester",
               "dateOfBirth": "01/11/1987",
               "jobTitle": "Product manager",
               "company": "Mock industries",
               "country": "IND",
               "employeeCountry": {
                  "name": "India",
                  "currencies": [
                     {
                        "code": "INR",
                        "name": "Indian rupee",
                        "symbol": "₹"
                     }
                  ],
                  "languages": [
                     {
                        "iso639_1": "hi",
                        "iso639_2": "hin",
                        "name": "Hindi",
                        "nativeName": "हिन्दी"
                     },
                     {
                        "iso639_1": "en",
                        "iso639_2": "eng",
                        "name": "English",
                        "nativeName": "English"
                     }
                  ],
                  "timezones": [
                     "UTC+05:30"
                  ]
               }
            }
         ]
      }
   )
}

export const emptyStringCountryResponse: ResponseVO = {
   statusCode: 200,
   body: JSON.stringify({
      "code": 0,
      "message": "success",
      "data": [
         {
            "firstName": "Roy",
            "lastName": "Testerton",
            "dateOfBirth": "19/02/1990",
            "jobTitle": "Software developer",
            "company": "Test co",
            "country": "US",
            "employeeCountry": {
               "name": "United States of America",
               "currencies": [
                  {
                     "code": "USD",
                     "name": "United States dollar",
                     "symbol": "$"
                  }
               ],
               "languages": [
                  {
                     "iso639_1": "en",
                     "iso639_2": "eng",
                     "name": "English",
                     "nativeName": "English"
                  }
               ],
               "timezones": [
                  "UTC-12:00",
                  "UTC-11:00",
                  "UTC-10:00",
                  "UTC-09:00",
                  "UTC-08:00",
                  "UTC-07:00",
                  "UTC-06:00",
                  "UTC-05:00",
                  "UTC-04:00",
                  "UTC+10:00",
                  "UTC+12:00"
               ]
            }
         },
         {
            "firstName": "Simon",
            "lastName": "McTester",
            "dateOfBirth": "01/11/1987",
            "jobTitle": "Product manager",
            "company": "Mock industries",
            "country": "IND",
            "employeeCountry": {
               "name": "India",
               "currencies": [
                  {
                     "code": "INR",
                     "name": "Indian rupee",
                     "symbol": "₹"
                  }
               ],
               "languages": [
                  {
                     "iso639_1": "hi",
                     "iso639_2": "hin",
                     "name": "Hindi",
                     "nativeName": "हिन्दी"
                  },
                  {
                     "iso639_1": "en",
                     "iso639_2": "eng",
                     "name": "English",
                     "nativeName": "English"
                  }
               ],
               "timezones": [
                  "UTC+05:30"
               ]
            },
            "generatedIdentifier": "simonmctester01111987"
         },
         {
            "firstName": "",
            "lastName": "",
            "dateOfBirth": "",
            "jobTitle": "",
            "company": "",
            "country": ""
         }
      ]
   })
}

export const mixedIDResponse: ResponseVO = {
   statusCode: 200,
   body: JSON.stringify({
      "code": 0,
      "message": "success",
      "data": [
         {
            "firstName": "Roy",
            "lastName": "Testerton",
            "dateOfBirth": "19/02/1990",
            "jobTitle": "Software developer",
            "company": "Test co",
            "country": "US",
            "employeeCountry": {
               "name": "United States of America",
               "currencies": [
                  {
                     "code": "USD",
                     "name": "United States dollar",
                     "symbol": "$"
                  }
               ],
               "languages": [
                  {
                     "iso639_1": "en",
                     "iso639_2": "eng",
                     "name": "English",
                     "nativeName": "English"
                  }
               ],
               "timezones": [
                  "UTC-12:00",
                  "UTC-11:00",
                  "UTC-10:00",
                  "UTC-09:00",
                  "UTC-08:00",
                  "UTC-07:00",
                  "UTC-06:00",
                  "UTC-05:00",
                  "UTC-04:00",
                  "UTC+10:00",
                  "UTC+12:00"
               ]
            }
         },
         {
            "firstName": "Simon",
            "lastName": "McTester",
            "dateOfBirth": "01/11/1987",
            "jobTitle": "Product manager",
            "company": "Mock industries",
            "country": "IND",
            "employeeCountry": {
               "name": "India",
               "currencies": [
                  {
                     "code": "INR",
                     "name": "Indian rupee",
                     "symbol": "₹"
                  }
               ],
               "languages": [
                  {
                     "iso639_1": "hi",
                     "iso639_2": "hin",
                     "name": "Hindi",
                     "nativeName": "हिन्दी"
                  },
                  {
                     "iso639_1": "en",
                     "iso639_2": "eng",
                     "name": "English",
                     "nativeName": "English"
                  }
               ],
               "timezones": [
                  "UTC+05:30"
               ]
            },
            "generatedIdentifier": "simonmctester01111987"
         }
      ]
   })
}

export const errorResponse: ResponseVO = {
   statusCode: 400,
   body: "{\"code\":1000,\"message\":\"Request failed with status code 404\"}"
}