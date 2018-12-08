# React-template

## Installation

We use node, npm and yarn.

### Dependencies and Versions

Node version: v9.11.1
npm version: v5.6.0
yarn version: v1.6

Test versions with:

```
node -v && npm -v && yarn -v
```

### Installing Dependencies

When you have the correct versions, install the required dependencies:

```
yarn install
```

## Running

### Main Project

Now we're ready to start:

```
yarn start
```

Build:

```
yarn build
```

Watch CSS:

```
yarn watch-css
```

## Testing

Install watchman to watch the tests:

```
brew install watchman
```

run tests:

```
yarn test
```

## Builds

To make sure our builds work in different environments

we introduce environment variables.

```
 "build-dev": "REACT_APP_BUILD=dev npm-run-all build-css build-js",
 "build-prod": "REACT_APP_BUILD=prod npm-run-all build-css build-js",
 "build-test": "REACT_APP_BUILD=test npm-run-all build-css build-js",
```

With environment variables in place we are able to add conditional statements

around what block of code we want to execute or what URLs we want to hit in different environments.

## Styles

NASA colours have been selected using the RGB values from [NASA's Style Guide](https://sservi.nasa.gov/wp-content/uploads/2011/10/NASA_Style_Guide_v2.1.pdf)
