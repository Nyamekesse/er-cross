# ER-Cross Frontend

## Getting Setup

> _tip_: this frontend is designed to work with [Flask-based Backend](../backend). It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate smoothly.

### Installing Dependencies

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `frontend` directory of this repository. After cloning, open your terminal and run:

```bash
npm install --legacy-peer-deps
```

> _tip_: **npm i** is shorthand for **npm install**

## Running Your Frontend in Dev Mode

React copmes with a useful development server which detects changes and transpiles as you work. The application is then accessible through the browser on a localhost port. To run the development server, cd into the `client` directory and run:

```bash
npm start
```

## Key Software Design Relevant to Our Coursework

The frontend framework is a bit beefy with a lot of components group together nicely in folders.
