import * as R from 'rambda'
import safeStringify from 'safe-stable-stringify'

export function hash(value: any) {
	let string = safeStringify(value)
	let [hash, i, char] = [0, 0, 0]
	for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i)
		hash = (hash << 5) - hash + char
		hash |= 0
	}
	return Math.abs(hash).toString(36)
}
