import * as http from './http'
import * as parser from 'iptv-playlist-parser'

export async function get() {
	// let parser = m3u8.createStream()
	let text = await await http.get(process.env.M3U_URL, { ttl: [1, 'minute'] })
	let parsed = parser.parse(text)
	console.log(`parsed ->`, parsed)
}
