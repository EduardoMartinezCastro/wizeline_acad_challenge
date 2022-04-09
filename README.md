# wizeline_acad_challenge
This is the repo for saving the challenge submission for the Go Bootcamp from Wizeline Academy

# Setup
To run this project you need:
- Nodejs(v12.13.0 or newer)
- npm

After setting up these tools, you need to run the following command inside the project folder:
```bash
npm install
```
in order to install all the dependencies from the package.json file, which are the following:

### Dependencies
- express
- axios
### Dev dependencies
- supertest
- jest

# Running the project
To run the project you can either call the script 'start' through the command:
```bash
npm start
```
or using node:
```bash
node server.js
```

And to run the unit tests, you need to run the script "test" after starting the server:
```bash
npm test
```

# Project
This project consists in an REST API with 4 endpoints(2 extra added by me) :

1) The default route, that displays a message "This is the root endpoint" within an HTML tag. This was added, a part from the 2 requested endpoints for this challenge, to prevent an error message while accesing this default route
```bash
GET /
```

2) The 'Hello World' route that shows a 'Hello World' message within an HTML tag.
 ```bash
 GET /hello-world
```
3) The 2nd requested endpoint for this challenge, chosen by me. This endpoint consumes the 'Rick and Morty' API, through the URL: 'https://rickandmortyapi.com/api/character/:id', and returns the information of a character from the series in JSON format, or message inside an HTML tag if the provide ID number doesn't exist
 ```bash
 GET /rick-n-morty-chr/:id
```

4) An endpoint to catch non-existent routes, and display a "Page not found" message
 ```bash
 GET /*
```
