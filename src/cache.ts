import * as dayjs from 'dayjs'
import * as fs from 'fs-extra'
import * as Keyv from 'keyv'
import * as path from 'path'
import KeyvFile from 'keyv-file'

export const store = new KeyvFile({
	filename: path.join(getCacheDir(), 'keyv.db'),
	expiredCheckDelay: dayjs(0).add(1, 'minute').valueOf(),
	writeDelay: 100,
})
export const keyv = new Keyv<string>({ store, ttl: dayjs(0).add(1, 'hour').valueOf() })

function getCacheDir() {
	for (let dir of require.main.paths) {
		if (fs.pathExistsSync(dir)) {
			dir = path.join(dir, '.cache', 'iptv.memorial')
			fs.ensureDirSync(dir)
			return dir
		}
	}
}
