import * as http from './http'
import fastify from './fastify'

process.nextTick(async () => {
	await fastify.ready()
	let response = await http.fetch(`http://localhost:${process.env.npm_package_port}/get_m3u`)
	// console.log(`response.headers.asObject() ->`, response.headers.asObject())
	// console.log(`response ->`, await response.text())
})
