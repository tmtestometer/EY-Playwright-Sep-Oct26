what is api ?
api = application prgramming interface

REST and SOAP

app1 (Java)              app2 (python)

zomato (C#) -   API  -   google map (go lang)


1 - service - resource - endpoint 
host + endpoint 



2 - authentication and authorization (header)

stateful - remember your state
stateless - everytime you have to authenticate

OAuth 
JWT
Bearer

auth-api

CRUD (Create Read Update Delete)
3 - intent (Method)
GET -    Read 
POST -  Create 
PUT -   Update
PATCH - Partially Update
DELETE - Delete

4 - Data 
    a - query param (key and value pair)    
        filter criteria 
    b - path param
        exact data
    c - payload (json)
        {
            "username":"sdaf"
        }



Response 

    1 Response Header 
    2 Response Status code 
        1XX - Informational
        2XX - Success , 200-OK, 201 - Created, 204 - No Content
        3XX - Redirectional (versioning)- 300 (multiple choices) , 301 (moved permanantly ) 
        4XX - Client side error , 400 - bad request, 401 - unauthrozed, 403 - forbidden, 404 - resouce not available, 405 - method not allowed, 409 - conflict, 429 - too many request
        5XX - Server side error , 500 - internal server error, 503 - service not available











    3 