import * as nodeEnvDev from 'node-env-dev'

nodeEnvDev.depth(4)

if (process.env.NODE_ENV == 'development') {
	process.nextTick(async () => {
		Object.assign({}, global, {
			dayjs: await import('dayjs'),
			R: await import('rambda'),
			RR: await import('rambdax'),
			stringFn: await import('string-fn'),
		})
	})
}
