import { it } from 'node:test'
import { MongoDBContainer } from '@testcontainers/mongodb'
import assert from 'node:assert'

it('second test', async () => {
    const container = await new MongoDBContainer('mongo:8').withReuse().start()
    assert.strictEqual(typeof container.getConnectionString(), 'string')
})