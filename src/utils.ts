import * as crypto from 'crypto'
import * as R from 'rambda'
import safeStringify from 'safe-stable-stringify'

export function hash(value: any) {
	if (R.type(value) != 'String') value = safeStringify(value)
	let sha256 = crypto.createHash('sha256').update(value)
	return sha256.digest('hex')
}
