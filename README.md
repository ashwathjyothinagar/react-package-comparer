# iModules React Components
## Reusable components for iModules React apps.

## Purpose
This library exists to facilitate code sharing between various React projects. Our goal is to start off very simple and small and slowly branch out as we learn together which components can effectively be reused across projects and which components are better off as local implementations.

### What iModules React Components Is
- A place to share commonly used components
- An attempt to reduce code duplication when implementing similar functionality across apps
- A localized home for items described in the [iModules UX Style Guide](http://ux.imodules.com/s/101/styleguide/)

### What iModules React Components Isn't
- A place to put any and all components you create
- A free-for-all library that anyone can modify at-will

## Usage

Ensure you have a reference to the private iModules NPM repository.

```
$ yarn config set registry http://buildserver2.local.imodules.com:4873
```

Then install the package.

NOTE: Our NPM server (which is a [Verdaccio](https://github.com/verdaccio/verdaccio) instance) acts as a proxy for NPM itself, so if a package isn't found locally, it will forward the request to NPM.

```
$ yarn add @imodules/react-components
```

The feature ducks are available as both named exports and as properties on the default export.

```typescript
import { forms } from '@imodules/react-components'
import imodComponents from '@imodules/react-components'

const { forms } = imodComponents
```

## Accessibility

Accessibility is a work-in-progress. Some components are very accessibile, while others are very not.

Some accessibility features depend upon [ally.js](https://github.com/medialize/ally.js/tree/master) being available. Ensure you include `@imodules/react-components/a11y` with your polyfils.

# Contributing

Submit a bug or issue on Bitbucket. If submitting a change, create a feature branch with your changes and make a pull request when they are ready to merge.

## Setup

```
$ yarn
```

## Running tests with Jest

```
$ yarn test
```
OR

```
$ yarn test:watch
```

## Testing with Storyshots
### Running Storyshots
```
$ yarn test:storyshots
```

### Updating Storyshots
```
$ yarn test:storyshots -u
```

## Testing with Wallaby
### VS Code
```
Ctrl + Shift + R R
```

## Build

```
$ yarn build
```

## Build for local testing
```
$ yarn buildAndCopy ${PATH_TO_YOUR_PROJECT}/node_modules/@imodules/react-components/
```

## Code Style

- [Re-Ducks](https://github.com/alexnm/re-ducks)

## Uses

- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [React](https://facebook.github.io/react/)

### Test tools
- [x] [Enzyme](https://github.com/airbnb/enzyme)
- [x] [Jest](https://github.com/facebook/jest)
- [x] [ts-jest](https://github.com/kulshekhar/ts-jest)
- [x] [Wallaby.js](https://wallabyjs.com/)
