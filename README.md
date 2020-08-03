# LTA

Deployment Guide

### Description

LTA (Language Translation App) is built with Node.js and React to be submitted to Topcoder practice challenge. (Link : https://www.topcoder.com/challenges/30128882)

To run or deploy, you can use yarn to start the backend application and then start the front end application. You can also use Docker Compose to start everything with a single command.

In both cases, the frontend can be accessed on port 3000 and the backend on port 8000.

http://localhost:3000

## Prerequisites

1. Node v11.14 (or newer)
1. NPM v6.10 (or newer)
1. yarn v1.15 (or newer)

Or,

1. Docker
1. Docker Compose

## Local Deployment

### Steps :

Install backend dependencies :

```bash
cd ./back/ && yarn
```

Start backend in dev mode

```bash
yarn run dev
```

Install frontend dependencies :

```bash
cd ../front/ && yarn
```

Start frontend in dev mode

```bash
yarn start
```

## Production Build and Installation

```bash
docker-compose up -d
```

## Notes

If you keep sending requests for an extended period of time, Google Translation API may start responding with an error message (with a status 429 Too Many Requests).

<i>
{error: "Request failed with status: 429. Message:
...
This page appears when Google automatically detects requests coming from your computer network which appear to be in violation of the <a href="//www.google.com/policies/terms/">Terms of Service</a>. The block will expire shortly after those requests stop...}
</i>

## Github repository

https://github.com/anastahri/language-translation-app
