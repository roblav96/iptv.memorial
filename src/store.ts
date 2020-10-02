import * as dayjs from 'dayjs'
import * as fs from 'fs-extra'
import * as KEYV from 'keyv'
import * as path from 'path'
import KeyvFile from 'keyv-file'

export default new KEYV<string>({
	store: new KeyvFile({
		filename: path.join(process.mainModule.paths.find(fs.pathExistsSync), '.cache/keyv.db'),
		expiredCheckDelay: dayjs(0).add(1, 'minute').valueOf(),
		writeDelay: 100,
	}),
	ttl: dayjs(0).add(1, 'hour').valueOf(),
})
