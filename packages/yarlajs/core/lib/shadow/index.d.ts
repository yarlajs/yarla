/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Indicates that the component is Shadow DOM.
 * 
 * @param component A component.
 * @param tagName The tagName for component element.
 */
export default function <T extends Yarla.Component<any>>(component: T, tagName?: string): T;
