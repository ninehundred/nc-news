## DO News App
This app was made to talk to a backend server and retrieve news articles, comments and so on.
You should be able to use this app on both mobile and desktop comfortably. 
This app allows you to log in (in a simplistic way) as well as vote on articles.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### link to deployed front end
https://do-news.netlify.app/

### link to deployed back end
the back end is not quite complete and so the following was used
https://be-nc-news-testing.herokuapp.com/steve

the backend i produced missing the full query feature can be found below
https://do-news-server.herokuapp.com/

## minimum node version
6.14.15

## running the project
### clone repo using
- git clone https://github.com/ninehundred/nc-news.git
### ensure CORS package is installed in back end
-  npm install cors
- git add package.json package-lock.json app.js
- git commit -m 'allow cross origin resource sharing'
- git push heroku main

## to run the build on netlify please 
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

## colour scheme reference
https://www.design-seeds.com/in-nature/nature-made/color-fog/


A few useful links here that I'll share with the rest of the cohort as well:
FreeCodeCamp article: https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/
List of good examples of README.md files: https://github.com/matiassingers/awesome-readme
In browser editor to create a readme: https://readme.so/editor










