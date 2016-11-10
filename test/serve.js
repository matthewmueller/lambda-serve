/**
 * Module Dependencies
 */

const Server = require('../index')
const assert = require('assert')
const roo = require('roo')

/**
 * Tests
 */

describe('lambda-serve', () => {

  it('should work with weird bodies', (done) => {
    const api = roo()
    api.post('/', function * () {
      this.body = this.request.body
    })

    const event = {
      'path': '/',
      'httpMethod': 'POST',
      'body': '{"article": "“lea"}',
      'headers': {
        'Content-Type': 'application/json'
      }
    }
    const ctx = {
      succeed: (res) => {
        assert.ok(res.headers.date)
        delete res.headers.date
        assert.deepEqual(res, {
          statusCode: 200,
          body: '{"article":"“lea"}',
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'content-length': '20',
            connection: 'close'
          }
        })

        done()
      }
    }

    const server = Server(api.listener())
    server(event, ctx)
  })

})
