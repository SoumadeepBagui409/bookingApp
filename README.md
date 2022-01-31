
# Project

This is a  Booking App


# TechStack

   EJS for rendering

Express is used for Server

MongoDB for date Base 

This project is based on server side rendering 


# Requirement

>This project requires you to have install mongoDB locally on your system

for windows -> https://www.youtube.com/watch?v=MCpbfYvvoPY&t=203s

-> Download an chrome extention that parse the incoming JSON will help you with /getUser and /getList GET request

for eg JSON formattar

https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa


## how to run the project

To run this project run

```bash
. make the clone of the project
. run "npm install" from the root directory
   -> it will download all the dependencies required  
. run npm start or node index.js
. website will be hosted at localhost:3000

```


## REST API

#### Get User form 

```http
  GET /
```

#### Get user regiteration forms 

```http
  GET /
```
 

#### Fetch all user 

```http
  GET /getUser
```
This project is currntly in development phase hence this api will helps a lot for for developer to get the all user stored in the Database so it ease out the process to fecth the user ID

#### Fetch all List

```http
  GET /getList
``` 
This project is in development phase will ease out developers a lot to fecth all the events


#### get List form

```http
  GET /items
``` 



#### get booking Form

```http
  GET /booking
``` 



#### Add Users to date base

```http
  POST /user
``` 
this will take the data incoming form GET / form for user

#### Add items to data base 

```http
  POST /item
```

this will add item in data base 


#### Add Booking Event

```http
  POST /booking
```

this will add booking detail in database 
