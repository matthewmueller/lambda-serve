'use strict'

/**
 * Module Dependencies
 */

const serverless = require('aws-serverless-express')

/**
 * Export `Server`
 */

module.exports = Server

/**
 * Create a server
 */

function Server (listener) {
  const server = serverless.createServer(listener)
  return function (event, ctx) {
    serverless.proxy(server, event, ctx)
  }
}
