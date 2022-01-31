
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

![userreq](https://user-images.githubusercontent.com/75625374/151767912-f151f6c1-f4ba-4b44-9362-28465f300bf7.jpg)

![bookingdone](https://user-images.githubusercontent.com/75625374/151767898-72655365-60d6-48c6-b8e7-9e70705ec51a.jpg)
![itemList](https://user-images.githubusercontent.com/75625374/151767906-41bf80b3-f672-418e-982d-d408e07b2ef2.jpg)



![getItems](https://user-images.githubusercontent.com/75625374/151767941-bea53451-b34e-44d0-81ad-11e7900971a0.png)




![getUserss](https://user-images.githubusercontent.com/75625374/151767945-0e063d44-5dfe-4e05-8546-d1e8731f1621.jpg)


![PostUser](https://user-images.githubusercontent.com/75625374/151767950-f0bd1113-2221-4b98-96c0-ffed77694216.png)
![PostBooking](https://user-images.githubusercontent.com/75625374/151767952-0deeb89d-3edf-48a4-9133-679756151aff.jpg)


![psotItems](https://user-images.githubusercontent.com/75625374/151767955-a62cf10a-b10a-471c-9ab5-b23860fec1d1.jpg)
![getListig (2)](https://user-images.githubusercontent.com/75625374/151767957-a3bb2b66-b545-4f91-b802-5900ccd0bf38.jpg)




![databse (2)](https://user-images.githubusercontent.com/75625374/151767965-92ec2d23-e1d7-4bb0-b33b-637dabaf4537.jpg)














