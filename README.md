# NASA Assets

## Demo

Netlify demo of the NASA assets

[Live demo](https://nasa-assets.netlify.com/)

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

Tests will run during commit

## Styles

NASA colours have been selected using the RGB values from [NASA's Style Guide](https://sservi.nasa.gov/wp-content/uploads/2011/10/NASA_Style_Guide_v2.1.pdf)

## Things to discuss

Sass

Netlify

CircleCI

Linting

Pre-Commit Hooks

Material UI

## Improvements

Video search

Loading state

Empty (no results) state

Paginagtion

Animation

Testing
