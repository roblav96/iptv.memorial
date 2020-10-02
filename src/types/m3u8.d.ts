declare module 'm3u8' {
	class MU {
		'constructor'()
		'EXT-X-BYTERANGE'(data: any): void
		'EXT-X-DISCONTINUITY'(): void
		'EXT-X-I-FRAME-STREAM-INF'(data: any): void
		'EXT-X-MEDIA'(data: any): void
		'EXT-X-STREAM-INF'(data: any): void
		'EXTINF'(data: any): void
		'addItem'(item: any): any
		'parse'(line: any): any
		'parseAttributes'(data: any): any
		'parseLine'(line: any): void
		static 'createStream'(): any
	}

	namespace MU {
		class M3U {
			constructor()
			addIframeStreamItem(data: any): void
			addItem(item: any): any
			addMediaItem(data: any): void
			addPlaylistItem(data: any): void
			addStreamItem(data: any): void
			domainDurations(): any
			get(key: any): any
			merge(m3u: any): any
			removePlaylistItem(index: any): void
			serialize(): any
			set(key: any, value: any): any
			toString(): any
			totalDuration(): any
			static create(): any
			static unserialize(object: any): any
		}
		namespace M3U {
			class IframeStreamItem {
				constructor(attributes: any, ...args: any[])
				toString(): any
				static create(data: any): any
			}
			class MediaItem {
				constructor(attributes: any, ...args: any[])
				toString(): any
				static create(data: any): any
			}
			class PlaylistItem {
				constructor()
				toString(): any
				static create(data: any): any
			}
			class StreamItem {
				constructor(attributes: any, ...args: any[])
				toString(): any
				static create(data: any): any
			}
		}
	}

	export = MU
}
