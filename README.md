# Hacker News

## Introduction

The front-end code for the Hacker news. Built in [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [Webpack](https://webpack.js.org/).

## Requirements

- [Node](https://nodejs.org/en/).
- [npm](https://www.npmjs.com/package/npm).

## Getting Started

**1. Clone Git Repo.**

```
$ git clone git@github.com:gitmurali/hacker-news.git
```

**2. Install Dependencies.**

Once that's all done, cd into the hacker-news directory and install the depedencies:

```
$ cd hacker-news
$ npm install
```

**3. Update .env**

The environment variables are stored in CircleCi. Therefore on build, the .env file is created dynamically with all the appropriate values.
On local, you need to manually set the values. 

**4. Run Application.**

Once the node modules have all been installed and npm has done it's thing, that's it. To open up a local development environment, run:

```
$ npm run start
```

Once the server is up and running, navigate to [localhost:3000](http://localhost:3000).

## Testing

[Jest](https://jestjs.io/) is testing platform used for the project. To run test use the following command:

```
$ npm run test
```

## Deployment

We use Circle CI as the CI/CD tool. 

# Tools Used

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [SASS](https://sass-lang.com/)
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [CircleCi](https://circleci.com/)
