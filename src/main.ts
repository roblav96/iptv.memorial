import 'dotenv/config'

process.on('unhandledRejection', error => {
	console.error(`unhandledRejection -> %O`, error)
})

process.nextTick(async () => {
	await import('./devops')
	await import('./fastify')
	// let fastify = (await import('./fastify')).default
	// await fastify.ready()
	if (process.DEVELOPMENT) {
		await import('./test')
	}
})
