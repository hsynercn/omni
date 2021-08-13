# Serverless App For Country Data

I created this basic REST API with Typescript on AWS Lambda using Serverless framework. Serverless framework provides useful boiler plates and It can invoke lambdas locally without Docker installation. I used Axios for external API usage, mocha/chai for unit testing.

## getCountyData

Current design provides single API method which expects an employee list(1 to n) as input and returns same list with expanded elements(for valid country codes). API has a minimum input format expectation for employees, firt of all AWS handler should receive an object list and each element should have below fields as string type.

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
External REST Countries API has a list of codes endpoint which returns a object list via supplied ISO 3166-1 2-letter or 3-letter country code list. Countries API endpoint constructs the response from valid county codes, other meaningles codes cause nulls. List of codes endpoint only returns an error if there is no valid code in supplied country code list. 

https://restcountries.eu/rest/v2/alpha?codes=col;no;ee;fffff;dddddd;

Same approach is applied to backend API endpoint getCountyData. Firstly country codes are extracted from employee list to a hash set and from hash set ';' seperated REST Countries URL is constructed. REST Countries does't return duplicated countries for duplicated ISO codes but we shouldn't expand URL unnecessarily. For valid country codes fetched data is reflected to employee object. Employee object with invalid ISO country codes are returned as is.

