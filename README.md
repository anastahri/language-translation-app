# LTA

LTA (Language Translation App) is built with Node.js and React to be submitted to Topcoder practice challenge. (Link : https://www.topcoder.com/challenges/30128882)

## Running the app

To run or deploy, you can use yarn to start the backend application and then start the front end application. You can also use Docker Compose to start everything with a single command.

In both cases, the frontend can be accessed on port 3000 and the backend on port 8000.

http://localhost:3000

### YARN

Steps :
Install backend dependencies :

```
$ cd ./back/ && yarn
```

Start backend in dev mode

```
$ yarn run dev
```

Install frontend dependencies :

```
$ cd ../front/ && yarn
```

Start frontend in dev mode

```
$ yarn start
```

### Docker Compose

## Google Translation API

If you keep sending requests for an extended period of time, Google Translation API may start responding with an error message (with a status 429 Too Many Requests).

```
{error: "Request failed with status: 429. Message:
...
This page appears when Google automatically detects requests coming from your computer network which appear to be in violation of the <a href="//www.google.com/policies/terms/">Terms of Service</a>. The block will expire shortly after those requests stop...}
```

## Github repository

https://github.com/anastahri/language-translation-app
