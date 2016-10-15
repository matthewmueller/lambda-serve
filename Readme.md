
# lambda-serve

  Use koa or express on lambda! This is just a simple wrapper around [aws-serverless-express](https://github.com/awslabs/aws-serverless-express)

## Installation

```js
npm install lambda-serve
```

## Koa example

```js
const Server = require('lambda-serve')
const koa = require('koa')
const app = koa()

/**
 * Add proxy support
 */

app.proxy = true

/**
 * Get the app
 */

const server = Server(app.callback())

/**
 * Run
 */

exports.default = (event, context) => {
  server(event, context)
}

/**
 * Respond to requests
 */

app.use(function * () {
  this.body = this.ip
})
```

## Setup

Follow https://github.com/awslabs/aws-serverless-express#steps-for-running-the-example to get started.
