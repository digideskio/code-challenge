# StackCommerce JS Twitter API Challenge

## Tech Stack
* React - View rendering
* Redux - Application state management
* React - Router
* Node - Server
* Webpack - Bundler
* Sass - Modular + programmatic css

I chose to use React, specifically with Redux because I think the Flux state management philosophy which Redux uses is very efficient. Application state is immutable in children components-- making it 'easy' to find where mutations are occurring.

Application state logic is handled in the reducer and action files. The React components just render the state.

### Local Setup

1. Clone the repo
2. npm install
3. open ./server.js and fill out Twitter API auth information
4. npm start - npm will build the bundle and run node
5. visit http://localhost:8888
