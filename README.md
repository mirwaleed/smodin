# Smodin
A user feedback system.
## Tech
Smodin uses a number of open source projects to work properly:
- [ReactJS] - Front-end JavaScript library for building user interfaces.
- [Material UI] - UI library of React UI components that implements Google's Material Design.

## Folder Structure

├── node_modules (.gitignore)

├── public

│   ├── favicon.ico

│   ├── index.html

│   └── manifest.json

├── src

│   ├── components

│   │   ├──  Header.tsx

│   │   └── Ratings.tsx

│   ├── mocks

│   │   └── essays.ts

│   ├── App.css

│   ├── App.tsx

│   │── App.test.tsx

│   ├── index.css

│   ├── index.tsx

│   └── setupTests.ts

├── .gitignore

├── package.json

└── README.md

└── yarn.lock

## Installation
Smodin requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd smodin
yarn
yarn start
```


## What I achieve so far
The initial layout of the task is done. If we talk about the structure of the applicaiton. The application is divided into number of components to make it as simple as possible. The applcation is designed in such a way that each component is only be responsible for one thing and is not contain code that deals with other things. In order to consider this thing there are two components in the components folder named Header.tsx and Ratings.tsx. The Header.tsx component is reponsible for to display the application top navbar while the Ratings.tsx component is reponsible to display the site/essay rating. At the end we call both of these components into the main file which is App.tsx. How it's working ? Well Initially the "leave us review" section will be disabled. It will enable once the user selects 5 stars both in the ratings. Once it's visible the user can fill the comment box with rating and can submit the result by clicking on the "Leave us a reaview".

## What can we improve(what's left behind in this task)
There are a lot of things we can improve in this application. Let's walk through one by one.
1) I think so we need to add validations in the "leave us a review" section. Right now if a user presses the "LEAVE US A REVIEW" button It calls the backend api which is not a correct behaviour. It should not call the api unless all the required fields are filled.
2) The second thing is that initially "LEAVE US A REVIEW" button should be disabled. It'll be enabled once all the required fields filled and once the user presses the button it'd disable again(so a user can't send multiple request to the backend).
3) Right now we do not have any loader in the application which signifies the user that something is in proress while the api is taking time.
4) Also we do not have the notification module in the system. The notifications are the best way to give the user what is going on in the system. Let's say somehow If a request is failed we will inform the user that something is went wrong please try again. similarly goes for the successfull request. This helps the user to keep interactive with the application.
5) As we are displaying the whole essay in our application. At the moment the length of the essay is short but let's consider what if the length of the essay is too large what will happen? It will cover the whole screen and the ratings will go into the next page. To avoid such scenario we should add show less/more button next to the essay paragrah by displaying only few lines.
