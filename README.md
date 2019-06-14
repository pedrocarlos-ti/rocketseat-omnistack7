# OmniStack Backend

Simple Backend NodeJS with Socket.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
Yarn or npm
MongoDB Credentials
```

### Installing

Fallow this steps bellow

```
git@github.com:pedrocarlos-ti/rocketseat-omnistack7.git
cd rocketseat-omnistack7
yarn or npm install
```

And finally

```
yarn dev (with nodemon) or yarn start
or
npm dev (with nodemon) or npm start
```

## Routes

![Alt Text](https://www.abc.org.uk/images/stories/arrows.jpg)

There are basically three routes in this backend, they are:

#### Posts

| Method | Endpoint | Format        | Request                                                          | Response    | Action                                      |
| ------ | -------- | ------------- | ---------------------------------------------------------------- | ----------- | ------------------------------------------- |
| _GET_  | `/posts` | n/a           | n/a                                                              | n/a         | **return all posts from database **         |
| _POST_ | `/posts` | multpart form | author <br> place <br> description <br> hashtags <br> image <br> | Post Object | **create a new post and save on database ** |

#### Like

| Method | Endpoint          | Format | Request | Response    | Action                       |
| ------ | ----------------- | ------ | ------- | ----------- | ---------------------------- |
| _POST_ | `/posts/:id/like` | n/a    | n/a     | Post Object | **update like of the post ** |

## Built With

- [NodeJS](https://nodejs.org/en/)
- [Socket.io](https://socket.io/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Deploy

Click and be happy!

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/pedrocarlos-ti/rocketseat-omnistack7&branch=backend-cloud-ibm)

## License

This project is licensed under the MIT License
