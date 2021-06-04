# 11straps = 11ty + Bootstrap5

[![Netlify Status](https://api.netlify.com/api/v1/badges/64b42b0c-aeba-4583-b023-202fcdf571bb/deploy-status)](https://app.netlify.com/sites/11straps-demo/deploys)

**Live Demo**: <a href="https://11straps.com" target="_blank">11straps.com</a>

## What is 11straps?
11straps is a simple boilerplate. It combines the static site generator <a href="https://www.11ty.dev/" target="_blank">11ty</a> with the CSS framework <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a> and is stitched together with some npm and Gulp magic dust. It minifies and purges the CSS file (so it removes any unused CSS) and comes with a static server and browser sync support for your local development.

## Requirements
You need Node (at least v8+) on your computer. To check if you have node and what version run this command in your terminal:
```
node --version
```

## Want to try it out now?
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/holger1411/11straps)

## Installation
Download and extract the [latest release](https://github.com/holger1411/11straps/releases) or checkout the main branch of this repo.
Fire up your terminal, go to the new folder and run:
```
npm install
```
Now you are good to go.

## Build it for dev
To build your static website for local development run:
```
npm run build-dev
```
This will build the static website into the `/dev` folder without all the minifiying and purging stuff (<- much faster and a more human friendly code output, but a much bigger package)

## Run in dev mode
To run the build-dev task automatically on file changes run:
```
npm run watch
```
That will run a local server from `/dev` folder and connects browser sync to it. On changes within the `/src` folder it will run the `npm run build-dev` command automatically and will refresh your browser.

## Build it for prod
If you are done with your dev work and happy with it its time to deploy your static website into the wild wild west (www). To build your static website for a prod deployment run:
```
npm run build
```
That will output the full site, with purged and minified CSS and minified html. The output will be stored in the `/public` folder.
