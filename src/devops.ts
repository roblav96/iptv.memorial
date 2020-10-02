import * as util from 'util'

Object.assign(util.inspect.defaultOptions, {
	depth: 4,
} as util.InspectOptions)

if (process.DEVELOPMENT) {
	process.nextTick(async () => {
		Object.assign({}, globalThis, {
			dayjs: await import('dayjs'),
			R: await import('rambda'),
			RR: await import('rambdax'),
			stringFn: await import('string-fn'),
		})
	})
}
