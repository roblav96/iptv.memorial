import 'dotenv/config'

if (!process.env.EPG_URL) throw new Error('Missing env -> EPG_URL')
if (!process.env.M3U_URL) throw new Error('Missing env -> M3U_URL')

process.nextTick(async () => {
	await import('./devops')
	await (await import('./app')).listen(Number.parseInt(process.env.PORT || '18199'))
	if (process.env.NODE_ENV == 'development') {
		await import('./test')
	}
})
