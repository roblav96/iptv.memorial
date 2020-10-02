export * from 'popsicle/dist/node'
export * from 'servie/dist/headers'
export { compose } from 'throwback'
import * as cache from './cache'
import * as utils from './utils'
import * as popsicle from 'popsicle/dist/node'

export async function memoized<T = any>(
	input: Parameters<typeof popsicle.fetch>[0],
	init = {} as Parameters<typeof popsicle.fetch>[1],
) {
	let hash = utils.hash({ input, init })
	let response = await cache.keyv.get(hash)
	if (!response) {
		response = await (await popsicle.fetch(input, init)).text()
		await cache.keyv.set(hash, response)
	}
	return response
}

// export async function get(
// 	input: Parameters<typeof popsicle.fetch>[0],
// 	init = {} as Parameters<typeof popsicle.fetch>[1] & {
// 		memoize?: boolean
// 		resMethod?: keyof popsicle.HttpResponse
// 	},
// ) {
// 	init.resMethod = init.resMethod || 'text'
// 	if (init.memoize) {
// 		let hash = utils.hash({ input, init })
// 		let response =
// 	}
// 	let response = await ((await popsicle.fetch(input, init)) as any)[init.resMethod]()
// 	console.log('response ->', response)
// 	return response
// 	// return await (await popsicle.fetch(input, init)).text()
// }
