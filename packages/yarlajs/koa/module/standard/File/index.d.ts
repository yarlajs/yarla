/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default File;

/**
 * A lazy {@link File} implementation.
 * It can be appended to {@link FormData} as an item,
 * but can't be used as a {@link BlobPart} to construct a {@link Blob}.
 * Because the {@link Blob} implemented by NodeJS does not support construct by stream.
 * 
 * @see https://github.com/nodejs/node/issues/37340
 */
declare const File: FileConstructor;

declare interface FileConstructor extends Yarla.Proto<Blob> {
    /**
     * @param fileBits Will always be ignored, please pass in an empty array.
     * @param fileName File absolute path.
     * @param options
     */
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
}

declare interface FilePropertyBag extends BlobPropertyBag {
    readonly lastModified?: number;
    readonly start?: number;
    readonly size?: number;
}

declare interface File extends Blob {
    readonly lastModified: number;
    readonly start: number;
    readonly name: string;
    readonly path: string;
}
