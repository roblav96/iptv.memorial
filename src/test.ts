import * as http from './http'
import * as m3u from './m3u'

process.nextTick(async () => {
	let response = await m3u.get()
	console.log('response ->', response)
	// console.log(`response.headers.asObject() ->`, response.headers.asObject())
	// console.log(`response ->`, await response.text())
})
