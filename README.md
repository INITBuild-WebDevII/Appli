# Appli
<p align="center">
    <img width="200" src="https://github.com/INITBuild-WebDevII/Application-Tracker/blob/main/client/src/assets/logo-letter.png?raw=true">
</p>

<p align="center">
Appli is the best platform for people to find tech jobs, manage your applications, and ace those interviews!
</p>

## About
Appli is a productivity web application that was developed over a span of 9 weeks as part of the INIT Build program for the Spring 2023 semester. It's designed to help computer science students organize and monitor their internship and job applications using a kanban board. It also provides resources in preparing for behavioral/technical interviews and a job board for finding opportunities.

## Team
- [Miguel Sablan](https://www.linkedin.com/in/miguel-sablan/)
- [Julian Arias](https://www.linkedin.com/in/julianarias2023/)
- Danny Lawrence
- [Nicole Gentil](https://www.linkedin.com/in/nicole-gentil-0a594b185/)
- [Maria Camila Copo Amador](https://www.linkedin.com/in/camicopoa)
- [Alex Chirinos](https://www.linkedin.com/in/chirinos-alexander)

## Preview

<img width="740" src="https://i.imgur.com/2CakqOc.png%22%3E" />

## Tech
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js (v.18.13.0)](https://nodejs.org/en)
- [Netlify](https://www.netlify.com/)

## Used Dependencies

| Server Side    	| Client Side               	| Only Development 	|
|----------------	|---------------------------	|------------------	|
| expressjs      	| react-beautiful-dnd          	| nodemon          	|
| validator      	| react-router-dom         	    |                  	|
| mongoose       	| react-calendar            	|                  	|
| cors           	| react-spinners              	|                  	|
| path           	| axios                     	|                  	|
| dotenv         	| date-fns                  	|                  	|
| jsonwebtoken   	| moment                    	|                  	|
| bcrypt           	| material-ui                   |                  	|


## How to Run?
- Download [node.js](https://nodejs.org/en/download/) 
- For database, you can use local mongodb or mongo atlas. See [here](https://www.mongodb.com/)

#### 1. Open a new terminal and select where you want to download/save the project at (ex: Desktop)
```
cd Desktop
```

#### 2. Clone the repository:

```
git clone https://github.com/INITBuild-WebDevII/Appli.git
``` 

#### 3. Change to the project's root directory:
```
cd Appli
```

#### 4. Open second terminal at same location.

#### 5. Change directory of first terminal and install necessary packages:
```
cd server
```
    
```
npm install
```
    
#### 6. Create .env file in server directory and enter required variables
```
PORT=4000
MONGO_URI=
JWT_SECRET=
```

#### 7. Start the server:
```
npm run start
```

#### 8. Switch to the second terminal

#### 9. Change directory of second terminal and install packages:
```
cd client
```

```
npm install
```

#### 10. Start the client:
```
npm run start
```
