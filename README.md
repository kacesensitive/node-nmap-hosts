# node-osquery

`node-osquery` is a module that provides a convenient interface for interacting with [OSQuery](https://osquery.io/). This allows for easy access to system data exposed by OSQuery, all within a JavaScript environment.

![Badge Branches](./coverage/badge-branches.svg)
![Badge Functions](./coverage/badge-functions.svg)
![Badge Lines](./coverage/badge-lines.svg)
![Badge Statements](./coverage/badge-statements.svg)

## Prerequisites

To use `node-osquery`, you must have [OSQuery](https://osquery.io/) installed on your system. OSQuery exposes an operating system as a high-performance relational database, and this module provides methods to interact with that data. To install OSQuery and learn more about its capabilities, please refer to the [official OSQuery documentation](https://osquery.readthedocs.io/en/stable/).

## Installation

You can install this module via npm using the following command:

`
npm install --save node-osquery
`

or using yarn:

`
yarn add node-osquery
`

## Usage

You can import and use the methods provided by this package as follows:

```
const { runOSQuery } = require('node-osquery');
// OR with ES6 import
import { runOSQuery } from 'node-osquery';
import { getWifiSurvey } from 'node-osquery';

const main = async () => {
const result = await runOSQuery('select * from users');
    console.log(result);
};

main().catch(console.error);

getWifiSurvey().then((data) => {
    console.log(data);
});
```

## Test

To run the test suite, execute the following command:

`
yarn test
`

## Contributing

I appreciate your contributions! Please feel free to submit a pull request or open an issue on the repository.

## License

This project is licensed under the MIT License.
