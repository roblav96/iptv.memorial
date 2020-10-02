import * as Fastify from 'fastify'
import * as m3u from './m3u'
import * as http from './http'
import exitHook = require('exit-hook')

const fastify = Fastify()
fastify.listen(process.env.npm_package_port).then(
	(address) => {
		console.info(`fastify listen ->`, address)
		exitHook(() => fastify.close())
	},
	(error) => console.error(`fastify listen '${process.env.npm_package_port}' -> %O`, error),
)
export default fastify

fastify.get('/get_m3u', async (request, reply) => {
	let data = await m3u.get()
	// console.log('data ->', data)
	return data
})
