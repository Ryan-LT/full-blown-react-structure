<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#side-notes">Side notes</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#development">Development</a>
      <ul>
        <li><a href="#coding">Coding</a></li>
        <li><a href="#commit">Commit</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This project is build in the purpose of completing [NAB](https://www.nab.com.au/ "NAB") Front-end job assignment.

Screenshot
![image](https://user-images.githubusercontent.com/54348153/113500872-aea3fa80-954b-11eb-82ab-eca85c7bfeb7.png)

### Built With
* [Webpack](https://webpack.js.org//)
* [Reactjs](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [ReduxToolkit](https://redux-toolkit.js.org//)
* [ReduxThunk](https://github.com/reduxjs/redux-thunk/)
* [Immerjs](https://github.com/immerjs/immer/)
* [React-Router5](https://router5.js.org//)
* [Axios](https://github.com/axios/axios/)

### Project Structure
+ husky
+ config
+ src
    + api
    + assets
    + components
    + pages
    + router
    + store
    + types
    + ultils
+ tests
    * components
    * pages
    * store

### Side notes
There is another branch called [without-router5](https://github.com/thinhlesdev/simple-weather-forecast/tree/without-router5) which not included router5.
The master branch otherwise is included with router5 and preload data mechanism. Data will be fetch before user visit home page.
[without-router5](https://github.com/thinhlesdev/simple-weather-forecast/tree/without-router5) branch is more dynamic, is will load data asynchronously after user visiting.

Unit-test cover all components, redux actions and redux store.
API mock was enabled by [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) which is dead simple to use :)

Api fetching is proxy in webpack config.

Since this project is develop using typescripts and ts-loader is used. So it skips Babel.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install npm globally to run webpack project
* Install npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/thinhlesdev/simple-weather-forecast.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
<!-- USAGE -->
## Development

### Coding
* Typescripts is strictly be used in this project
* Code style is checked by eslint with [airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript) plugin
* Code format by prettier, prettier extention is recommend to install

### Commit
* This project is setup with [commit-lint](https://github.com/conventional-changelog/commitlint) and follow conventional commit.
* Commit message will be checked by husky so please follow this rule [here](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md)
* Make sure all unit-tests are pass and type are properly defined - they will be verify by using husky in every commits.

## Usage

1. To run project on your local machine
   ```sh
   npm run dev
   ```
2. To run test
   ```sh
   npm run test
   ```
3. To check test coverage
   ```sh
   npm run test:coverage
   ```
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Ryan Le  - thinh.le.sdev@gmail.com

Project Link: [simple-weather-forecast](https://github.com/thinhlesdev/simple-weather-forecast)
