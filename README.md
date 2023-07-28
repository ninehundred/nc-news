## DO News App
This app was created to demonstrate knowledge of a front end portion of full stack development.
It utilises the api of be-nc-news (ADD LINK) to display items on the front end.
This app will work on both a desktop and mobile application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### link to deployed front end
https://do-news.netlify.app/

### link to deployed back end
https://do-news-server.herokuapp.com/api

note - both back and front end are ongoing as I develop more features in each to continue learning.

## minimum node version
6.14.15

## running the project
### clone repo using
- git clone https://github.com/ninehundred/nc-news.git
### back end - ensure CORS package is installed:
- (to allow use of resource can be used on this application)
- npm install cors 
- git add package.json package-lock.json app.js
- git commit -m 'allow cross origin resource sharing'
- git push heroku main

## to run the build on netlify: 
- create a netlify account
- npm run build
- instal the netlify command line with: npm install netlify-cli -g
- run: netlify deploy
- authorise with your own git hub
- select create and configure new site
- provide a name of your choice
- select your personal account
- provide a deploy path: ./build
- run: netlify deploy --prod to run the production deployment

## colour scheme reference:
https://www.design-seeds.com/in-nature/nature-made/color-fog/

## Main features and learning points:
- React
- State/ state management
- Hooks
- Optimistic Rendering
- Login authentication
- CSS
- HTML
- Single page applications
- API use/ calls
- React Components
- Fontawesome use in react
- Wrappers
- Simple deployment to server











