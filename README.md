<img align="right" width=200px height=200px src="https://cdn.discordapp.com/attachments/776153365452554301/786297555415859220/Tech-With-Tim.png" alt="Project logo">

<h1>Tech With Tim website frontend</h1>

---

<div>

[![GitHub Issues](https://img.shields.io/github/issues/Tech-With-Tim/Frontend.svg)](https://github.com/Tech-With-Tim/Frontend/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Tech-With-Tim/Frontend.svg)](https://github.com/Tech-With-Tim/Frontend/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Discord](https://discord.com/api/guilds/501090983539245061/widget.png?style=shield)](https://discord.gg/twt)
[![Test and deploy](https://github.com/Tech-With-Tim/Frontend/workflows/Test%20and%20deploy/badge.svg)](https://github.com/Tech-With-Tim/Frontend/actions?query=workflow%3A%22Test+and+deploy%22)

</div>
<p> Frontend for the Tech with Tim website using React.</p>

## 📝 Table of Contents

<!-- - [About](#about) -->
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Contributing](/CONTRIBUTING.md)
- [License](/LICENSE.md)
- [Authors](#authors)

<!-- ## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project. -->

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Install the required packages with Node Package Manager:

```sh
npm install
```

### Running

Run the app in the development mode:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website in the browser.

The page will reload if you make edits. And you will also see any lint errors in the console.

## 🔧 Running the tests <a name = "tests"></a>

Run tests with:

```sh
npm test
```

**⚠ You need to write tests when contributing ⚠**

## Api Setup

- `cd api`
- `touch .env`
  write the .env file based on this template
   ```env
   SECRET_KEY='longsecret key'
   DB_URI=postgresql://user:password@db:5432/twt
   POSTGRES_USER=user
   POSTGRES_PASSWORD=password
   POSTGRES_DB=twt
   DISCORD_CLIENT_ID=<discord client id : int>
   DISCORD_CLIENT_SECRET=<discord client secret :string>
   ```
- `docker-compose up`
   This may fail the first time but try again

## 🚀 Deployment <a name = "deployment"></a>

Start by building the app with:

```sh
npm run build
```

This builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

**Your app is now ready to be deployed!**

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Frontend framework

## ✍️ Authors <a name = "authors"></a>

- [@mohamed040406](https://github.com/mohamed040406) - Everything
- [@takos22](https://github.com/takos22) - Markdown files


See also the list of [contributors](https://github.com/Tech-With-Tim/Frontend/contributors) who participated in this project.
