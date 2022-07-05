/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Determines if the input parameter is an object, exclude null.
 * 
 * @param argc Any object.
 * @param strict Indicates if it is a strict object. 
 */
export default function (argc: any, strict?: boolean): argc is Yarla.AnyObject;
