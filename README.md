# Serverless App For Country Data

I created this basic REST API with Typescript on AWS Lambda using Serverless framework. Serverless framework provides useful boiler plates and It can invoke lambdas locally without Docker installation. I used Axios for external API usage, mocha/chai for unit testing.

## getCountyData

Current design provides single API method which expects an employee list(1 to n) as input and return same list with expanded elements. API has a minimum input format expectation for employees, firt of all AWS handler should receive an object list and each element should have below fields as string.

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
REST Countries API has a list of codes endpoint which returns a object list via supplied ISO 3166-1 2-letter or 3-letter country code list. This endpoint constructs the response only from valid county codes, any other meaningles codes are ignored. List of codes endpoint returns an error if there is no valid code in supplied country code list. Same approach is applied to backend API endpoint.  

