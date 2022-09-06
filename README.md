## Table of contents

- [Introduction](#the-introduction)
- [How to Get Started](#how-to-get-started)
- [Where To Ask Questions](#where-to-ask-questions)
- [Links and Resources](#links-and-resources)
- [Get in Touch](#how-to-get-in-touch)
- [Creating a Docker Container Image](#creating-a-docker-container-image)
- [Built with](#built-with)
- [APIs or Libraries used](#apis-and-libraries-used)
  - [Animations](#animations)
- [Project Structure](#project-structure)
- [Installation and Useful Scripts](#installation-and-useful-scripts)


# 📜 The Introduction

[![Gitter](https://badges.gitter.im/OSCA-Kampala-Chapter/TTS.svg)](https://gitter.im/OSCA-Kampala-Chapter/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![License](https://img.shields.io/badge/License-MIT%202.0-brightgreen.svg)](https://opensource.org/licenses/MIT-2.0)

**Open Source Community Kampala** is an organisation for open-source lovers, enthusiasts, advocates, and experts within and across Uganda but centered in Kampala with the sole aim of increasing the rate of credible contributions by Ugandan software developers, designers, writers, and everyone involved in the sphere of technology to open source projects both locally and globally, changing the perception the world has of our developers; we are not just users of software tools, we are also **Software creators**.

You are welcome to our documentation guide; if you are looking to join **OSCA-Kampala Chapter** and want to learn more about **Free and Open Source Software** and also want to know how you can make a contribution to any of our projects. Read this documentaion as a guide; Although it is a work in progress, please feel free to contribute and give us feedback to improve it.

To suggest changes, click the GitHub icon on any docs page and make a pull request. If you're not sure how to do that, read our [documentation contribution guidelines](https://github.com/OSCA-Kampala-Chapter/First-contribution-practice/blob/main/CONTRIBUTING.md).

If you need more help, please contact us at [oscakampala@gmail.com](mailto:oscakampala@gmail.com) or join the `#documentation` channel on our [Discord](https://discord.gg/pRJgjH9SwR) server.

## 🏁 How to Get Started

To get started in the open source there's a multitude of tools you can use but first of all you will need to know about OSCA Kampala. Read our **Introduction** section:

📰 [**Subscribe to OSCA-KLA Newsletter**](https://www.getrevue.co/profile/oscakampala)

<img src="https://static.scarf.sh/a.png?x-pxid=cf317fe7-2188-4721-bc01-124bb5d5dbb2" />

## 💬 Where to Ask Questions

Please use our dedicated channels for questions and discussion. Help is much more valuable if it's shared publicly so that more people can benefit from it.

| Type                            | Platforms                             |
| ------------------------------- | ------------------------------------- |
| 🚨 **Bug Reports**              | [GitHub Issue Tracker]                |
| 🎁 **Feature Requests & Ideas** | [GitHub Issue Tracker]                |
| 👩‍💻 **Usage Questions**          | [Github Discussions]                  |
| 🗯 **General Discussion**        | [Github Discussions] or [Gitter Room] |

[github issue tracker]: https://github.com/oscakampala/oscakampala.github.io/issues
[github discussions]: https://github.com/oscakampala/oscakampala.github.io/discussions
[gitter room]: https://gitter.im/OSCA-Kampala-Chapter?utm_source=share-link&utm_medium=link&utm_campaign=share-link

## 🔗 Links and Resources

| Type                 | Links                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------- |
| 💼 **Documentation** | [Documents](https://github.com/OSCA-Kampala-Chapter/First-contribution-practice)         |
| ⚒️ **Built Tools**   | [Made in Uganda](https://github.com/OSCA-Kampala-Chapter)              |
| 👩‍💻 **Contributing**  | [CONTRIBUTING.md](https://github.com/oscakampala/oscakampala.github.io/blob/main/CONTRIBUTING.md) |

## ☎️ How to get in touch

If you need more help, please join our whatsapp group [Whatsapp group](https://chat.whatsapp.com/D2bB0UWDgT34Fic3Hnb2fA), [Telegram Chat](https://t.me/oscakampala) or join our [Discord ](https://discord.gg/pRJgjH9SwR) server.

## ✨ This spells the end

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Creating a docker container image

In order to create a docker container image, you can use the steps below

Clone this repository and navigate into its directory

Ensure you have minikube installed

Run the commands below

`minikube start`

`kubectl get nodes`

`docker image build -t <dockerhub_username>/small-web-img:0.1 . `

You can then be able to upload your image to the hub using the commands below

`docker login`

`docker image push <dockerhub_username>/small-web-img:0.1`

Incase you wish to run a the uploaded container image you can do so like below

`docker run --rm --name osca_website -p8080:3000 <dockerhub_username>/small-web-img:0.1`

Then you are able to check it out on 

`http://localhost:8080/`

## Built with.

- React.js as the front-end library
- Next.js as the react framework
- Tailwind css

## APIs and Libraries used

### Animations

The `react-reveal` library was used for the animations like those on the home page, for example.

**Installation**
In the command prompt run:
`npm install react-reveal --save`
Alternatively you may use `yarn`:
`yarn add react-reveal`
 
 For more about how the `react-reveal` library works, you can [read its documentation.](https://www.react-reveal.com/examples/)


## Project Structure

```
.
├── Dockerfile
├── .github
├── .storybook
├── .gitignore
├── LICENCE
├── README.md
├── tailwind.config.js
├── postcss.config.js
├── CONTRIBUTING.md
├── package.json
├── components
│   ├── metadata 
│                ├── metadata.js
│   ├── ...
│   └── Utils.jsx
├── public
│   ├── favicon.ico
│   ├── fonts
│   └── styles
├── pages
│   ├── user
│           ├── login.jsx
│   ├── ...
│   └── _app.js
├── dist
│   ├── output.css
├── styles
│   ├── ...
│   └── globals.css
└── yarn.lock
```

## Getting Started

### Installation and Useful Scripts

```bash

# From the root folder, run this command install all dependencies
$ yarn

# Runs the app in the development mode. Open http://localhost:3000 with your browser to see the result.
$ yarn dev

# building the app
$ yarn build

# Start a sandbox to view all resusable components developed in the aplication. Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
$ yarn storybook

```

