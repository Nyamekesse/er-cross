# ER-Cross

## Health service delivery via the internet

Joining long ques waiting for the Doctor at the school hospital was something which was frustrating to the students. In view of that we have come up with an online system which can enable you to request for a health service ath the comfort of your home. This software include the following features

1. Allow students to create accounts
2. Allow students to login.
3. Allow student to send a request which includes their current location.
4. An interactive platform to receive news.

## Guides to installations and running locally, refer to these links

1. [`./client/`](.\client\README.md)
2. [`./server/`](.\server\README.md)

## About the Stack

We decide to use two different languages for the stack, hus Javascript and Python

### Backend

The `./server` directory contains a partially completed Flask server because we were not able to complete because of time.

[View the README.md within ./server for more details.](./server/README.md)

### Frontend

The `./client` directory contains a complete Ionic frontend to consume the data from the Flask server. You will only need to update the environment variables found within (./frontend/src/environment/environment.ts) to reflect the Auth0 configuration details set up for the backend app.

[View the README.md within ./client for more details.](./client/README.md)
