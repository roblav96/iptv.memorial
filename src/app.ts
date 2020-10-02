import * as uWS from 'uWebSockets.js'
import * as m3u from './m3u'
import * as http from './http'
import exitHook = require('exit-hook')

export const app = uWS.App()

app.get('/get_m3u', async (res, req) => {

	res.cork(() => {
		res.write('<html><h1>')
		res.write(
			'Your proxied IP is: ' + Buffer.from(res.getProxiedRemoteAddressAsText()).toString(),
		)
		res.write('</h1><h1>')
		res.write(
			'Your IP as seen by the origin server is: ' +
				Buffer.from(res.getRemoteAddressAsText()).toString(),
		)
		res.end('</h1></html>')
	})
})

export function listen(port: number) {
	return new Promise<string>((resolve, reject) => {
		app.listen(port, (socket: uWS.us_listen_socket) => {
			if (!socket) {
				return reject(`app listen !socket -> '${port}'`)
			}
			exitHook(() => uWS.us_listen_socket_close(socket))
			let address = `http://127.0.0.1:${port}`
			console.info('app listen ->', address)
			resolve(address)
		})
	})
}
