# Serverless App For Country Data

I created this basic REST API with Typescript on AWS Lambda using Serverless framework. Serverless framework provides useful boiler plates and It can invoke lambdas locally without Docker installation. I used Axios for external API usage, mocha/chai for unit testing.

## getCountyData

Current design provides single API method which expects an employee list(1 to n) as input and returns same list with expanded elements(for valid country codes). API has a minimum input format expectation for employees, firt of all AWS handler should receive an object list and each element should have below fields as string type. Invalid object lists cause 400 resposes. 

```json
[
   {
      "firstName":"Roy",
      "lastName":"Testerton",
      "dateOfBirth":"19/02/1990",
      "country":"US"
   }
]
```
External REST Countries API has a list of codes endpoint which returns a object list via supplied ISO 3166-1 2-letter or 3-letter country code list. Countries API list of codes endpoint is a good option for current scenario, bulk fetching eliminates HTTP overhead and extra memory usage. Countries API endpoint constructs the response from valid county codes, other meaningles codes returned as nulls. List of codes endpoint only returns an error if there is no valid code in supplied country code list. 

https://restcountries.eu/rest/v2/alpha?codes=col;no;ee;fffff;dddddd;

Same approach is applied to backend API endpoint getCountyData. Firstly country codes are extracted from employee list to a hash set and from hash set ';' seperated REST Countries URL is constructed. REST Countries does't return duplicated countries for duplicated ISO codes but we shouldn't expand URL unnecessarily thus a hash set is used for storage. For valid country codes fetched data is reflected to employee object. Employee objects with invalid ISO country codes are returned as is.

External REST Countries API root URL is stored on serverless.yml as environment variable REST_COUNTRIES. Id generation region scope is stored as ADDITIONAL_IDENTIFIER_REGIONS environment variable on same file.

Unit tests are covering most of the code, current package.json runs 'npm test' with nyc to display coverages.

Response is a simple JSON object with a status code and stringfied body. Method retursn 400 for invalid inputs/bad reuqests, 200 for successful requests. 

```json
{
   "statusCode": 200,
   "body": {
      "code":0,
      "message":"success",
      "data":[
         {
            "firstName":"Roy",
            "lastName":"Testerton",
            "dateOfBirth":"19/02/1990",
            "jobTitle":"Software developer",
            "company":"Test co",
            "country":"US",
            "employeeCountry":{
               "name":"United States of America",
               "currencies":[
                  {
                     "code":"USD",
                     "name":"United States dollar",
                     "symbol":"$"
                  }
               ],
               "languages":[
                  {
                     "iso639_1":"en",
                     "iso639_2":"eng",
                     "name":"English",
                     "nativeName":"English"
                  }
               ],
               "timezones":[
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
            "firstName":"Simon",
            "lastName":"McTester",
            "dateOfBirth":"01/11/1987",
            "jobTitle":"Product manager",
            "company":"Mock industries",
            "country":"IND",
            "employeeCountry":{
               "name":"India",
               "currencies":[
                  {
                     "code":"INR",
                     "name":"Indian rupee",
                     "symbol":"₹"
                  }
               ],
               "languages":[
                  {
                     "iso639_1":"hi",
                     "iso639_2":"hin",
                     "name":"Hindi",
                     "nativeName":"हिन्दी"
                  },
                  {
                     "iso639_1":"en",
                     "iso639_2":"eng",
                     "name":"English",
                     "nativeName":"English"
                  }
               ],
               "timezones":[
                  "UTC+05:30"
               ]
            },
            "softIdentifier":"simonmctester01111987"
         }
      ]
   }
}
```
