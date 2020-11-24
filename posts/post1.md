---
title: "Blog Development"
date: "2020-11-18"
slug: "blog-development"
---

I started making this blog this week, it is my second attempt at making this blog. The first attempt failed after i couldn't wrap my head around the extensive gatsby plugin ecosystem. The blog uses [Gatsby](https://www.gatsbyjs.com/) to generate a static website from markdown files. [Gatsby's website](https://www.gatsbyjs.com/docs/) offers a great tutorial on getting started to develop your own website. It can generate pages from a cms source or from your file system. As their website says it is the "One Front-end to Rule Them All".

## Development Environment

Gatsby is built with Node.js. To get up and running with Gatsby, you’ll need to have a recent version installed on your computer. Also you will need the npm which is the package manager for Nodejs.

### Windows Instructions to install Nodejs
- Download and install the latest Node.js version from the official [Node.js website](https://nodejs.org/en/)

### Linux Instructions
1. Install nvm (Node version manager) 
```
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```
2. Confirm that nvm finished installing.
```
  nvm --version
```

### Set default Node.js version

```
nvm install 10
nvm use 10
```

Confirm that this worked
```
npm --version
node --version
```

### Installing the gatsby ClI

```
npm install -g gatsby-cli
```
