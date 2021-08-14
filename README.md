# Serverless App For Country Data

I created this basic REST API with Typescript on AWS Lambda using Serverless framework. Serverless framework provides useful boiler plates and It can invoke lambdas locally without Docker installation. I used Axios for external API usage, mocha/chai for unit testing.

## getCountyData

Current design provides a single API endpoint which expects an employee list(1 to n) as input and returns the same list with expanded elements(for valid country codes). API has a minimum input format expectation for employee list, first of all AWS handler should receive an object list and each element should have below fields as string type.

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
External REST Countries API has a list of codes endpoint which returns an object list via supplied ISO 3166-1 2-letter or 3-letter country code list. Countries API list of codes endpoint is a good option for current scenario, bulk fetching eliminates HTTP overhead and extra memory usage. Countries API endpoint constructs the response from valid county codes, other invalid codes returned as nulls in response list. List of codes endpoint only returns an error if there is no valid code in the supplied country code list. CountryService class encapsulates the Countries API; the current implementation provides country access with getAll, getByName, getByCode, getByCodeList methods. Only getByCodeList is used for current needs, for future requirements this class can expand Countries API access(with required unit test additions).

Sample URL for REST Countries API behavior demonstration:
https://restcountries.eu/rest/v2/alpha?codes=col;no;ee;fffff;dddddd;

Same flexible return approach is applied to getCountyData endpoint. Country codes are extracted from the input employee list to a hash set and ';' separated REST Countries URL is constructed. REST Countries endpoint does not return duplicated countries for duplicated ISO codes URL but we shouldn't expand URL unnecessarily thus a hash set is used for reduction. Fetched data is reflected to employee objects for valid country codes. Employee objects with invalid ISO country codes are returned as is. If there is no valid county code in whole employee list input an error message is returned same as REST Countries API. This logic assumes getCountyData endpoint can be used for employee lists which have at least one valid country id, this is a design choice. 

External REST Countries API root URL is stored on serverless.yml as environment variable REST_COUNTRIES. Id generation region scope is stored as ADDITIONAL_IDENTIFIER_REGIONS environment variable on the same file. These details are isolated on the serverless.yml config file.

Unit tests are covering most of the code, current package.json runs 'npm test' with nyc to prints coverages and also generates report html.

![image](https://user-images.githubusercontent.com/28985966/129439210-e5265839-195b-4749-956f-d8fd70bdc0d2.png)

I didn't add integration tests, current unit test suite mocks all used REST Countries API endpoints. For a better development process we can add integration tests and apply quality gate policies like using SonarQube for minimum unit test coverage limit or code smell scoring.  

Amazon Cognito user pools may be used for authentication. 
There is an external API integration on this service, circuit breaker pattern can increase our microservice stability.

Response is a simple JSON object with a status code and stringfied body. Country information is grouped under employeeCountry object. Optional identifier is returned with generatedIdentifier. Be aware firstName, lastName and dateOfBirth are not reliable combination for unique id generation, we may need additional integration in this service for id uniqueness.

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
            "generatedIdentifier":"simonmctester01111987"
         }
      ]
   }
}
```




