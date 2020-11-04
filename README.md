# 11straps = 11ty + Bootstrap5

**Demo**: <a href="https://11straps.com" target="_blank">11straps.com</a>

11straps is a simple boilerplate. It combines the static site generator <a href="https://www.11ty.dev/" target="_blank">11ty</a> with the CSS framework <a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a>. It minifies and purges the CSS file (so it boiles down the TailwindCSS file to a few kb, based on your usage) and comes with a static server and browser sync support for your local development.

## Installation
Download or checkout the master branch of this repo.
Fire up your terminal, go to the new folder and run:
```
npm install
```
Now you are good to go.

## Build it
To build your static website from the `/src`folder run:
```
npm run build
```
That will output the full site, with purged and minified CSS and minified html. The output will be stored in the /public folder

To run the build task automatically on file changes run:
```
npm run watch
```
That will run 11ty in dev mode. Means it will build a non-minified version within the /dev folder, start a server from this folder and connects browser sync to it.
