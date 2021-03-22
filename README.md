# Micro Frontends Example (v2021)

This repository contains a micro frontend example implementation based on [webpack Module Federation](https://webpack.js.org/concepts/module-federation/).

## Used Technologies

This repository uses different technologies to implement an example store that sells tractors.

- [React](https://reactjs.org/) is used to render the frontend.
- [Material UI](https://material-ui.com/) is used to build a nice looking interface based on the [Material Design](https://material.io/design) principles.
- [webpack](https://webpack.js.org/) is used to build each micro frontend and the app shell.
- [Module Federation](https://webpack.js.org/concepts/module-federation/) is used to load the micro frontends dynamically during runtime execution.
- [TypeScript](https://www.typescriptlang.org/) is used to write type-safe code that is later transpiled to JavaScript.

## Architecture

This repository contains only frontend code, a backend is simulated using a shared library that contains all required "data" for the frontends to display any meaningful information.

The frontend itself is split into separate modules that can be indepently developed by different teams. This is the [micro frontend architecture pattern](https://micro-frontends.org/).

### Macro Architecture

The following diagram shows a high level view of the architecture itself.

&lt;insert diagram here&gt;

## Future Improvements

Such a project is never complete. ;-) The following list gives an overview what could be improved.

- [ ] Implement a real backend for each micro frontend, or add a unified API that allows all frontends to access the right data for their need (e.g. using one unified GraphQL API).
- [ ] Extract the webpack build configuration into a separate module to simplify the setup for a new micro frontend.
- [ ] Add a build process via GitHub actions that builds each micro frontend in a separate job. This would better show the full power of independent build & deployment of each frontend. (It is already working like it should, but the build process currently does not show this very well.)
- [ ] Each micro frontend exposes components that can be imported by other micro frontends. While the code itself is type-safe (through TypeScript) the code imports are totally dynamic an types need to be predicted by the consuming side. Some kind of registry could be used to detect type mismatches. (An approach like Apollo Federation is using could be used a inspiration.)
