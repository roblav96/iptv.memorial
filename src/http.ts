import * as dayjs from 'dayjs'
import * as popsicle from 'popsicle/dist/node'
import * as R from 'rambdax'
import * as utils from './utils'
import store from './store'

export async function get(
	input: Parameters<typeof popsicle.fetch>[0],
	init = {} as Parameters<typeof popsicle.fetch>[1] & {
		memoize?: boolean
		ttl?: [number, dayjs.OpUnitType]
	},
) {
	let [hash, memoize, ttl] = ['', init.memoize, NaN]
	if (R.isType('Array', init.ttl)) {
		memoize = true
		ttl = dayjs(0).add(init.ttl[0], init.ttl[1]).valueOf()
	}
	if (memoize == true) {
		if (R.isType('NaN', ttl)) ttl = dayjs(0).add(1, 'hour').valueOf()
		hash = utils.hash({ input, init })
	}
	// let hash = utils.hash({ input, init })
	// console.log('hash ->', hash)
	// // let response =
	let response = await (await popsicle.fetch(input, init)).text()
	console.log('response ->', response)
	return response
	// return await (await popsicle.fetch(input, init)).text()
}

// export async function memoized<T = any>(
// 	input: Parameters<typeof popsicle.fetch>[0],
// 	init = {} as Parameters<typeof popsicle.fetch>[1],
// ) {
// 	let hash = utils.hash({ input, init })
// 	let response = await cache.keyv.get(hash)
// 	if (!response) {
// 		response = await (await popsicle.fetch(input, init)).text()
// 		await cache.keyv.set(hash, response)
// 	}
// 	return response
// }
