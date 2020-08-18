# coding-challenge-flaconi

Please find in this repo the coding challenge for the Flaconi frontend interview. All main functionality is working, the web page is fully responsive. For the bonus points the sorting functionality, pagination and some snapshot test using enzyme and jest were implemented as well as some test for javascript helper functions. The react app uses hooks to leverage the state managment using useReducer and useContext hooks.

## Run the app

You can either run the app in development mode or build and run the docker image for production mode.

For running in development mode, first you need to install all dependencies with `npm i` or `yarn` and then just run `npm start` or `yarn start`.

If you want to use the docker image instead run the following commands in the terminal.

- `docker build . -t flaconi-docker`
- `docker run -p 8080:80 flaconi-docker`
