/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

import _getComputedStyle from "./lib/getComputedStyle/index.js";
import _requestFullscreen from "./lib/requestFullscreen/index.js";
import _exitFullscreen from "./lib/exitFullscreen/index.js";
import _scrollTo from "./lib/scrollTo/index.js";
import _history from "./lib/history/index.js";
import _render from "./lib/render/index.js";
import _Router from "./lib/Router/index.js";

export = dom;

declare namespace dom {
    export {
        _getComputedStyle as getComputedStyle,
        _requestFullscreen as requestFullscreen,
        _exitFullscreen as exitFullscreen,
        _scrollTo as scrollTo,
        _history as history,
        _render as render,
        _Router as Router,
    }
    export interface History {
        readonly location: Location;
        readonly length: number;
        readonly state: any;
        back(): void;
        forward(): void;
        go(delta?: number): void;
        navigate(url: string | URL, state?: any): void;
        redirect(url: string | URL, state?: any): void;
        listen(listener: Yarla.EventListenerOrEventListenerObject, opts?: Yarla.AddEventListenerOptions): Yarla.Cancelable;
    }
    export interface Location {
        readonly protocol: string;
        readonly host: string;
        readonly hostname: string;
        readonly port: string;
        readonly pathname: string;
        readonly search: string;
        readonly hash: string;
        readonly href: string;
    }
    export interface Router extends Yarla.Node {

    }
    export interface RouterProperties extends Yarla.ChildrenAttributes, Yarla.ClassAttributes<Router> {

    }
    export interface RouterComponent extends Yarla.Component<RouterProperties> {
        readonly Link: RouterLinkComponent;
        readonly View: RouterViewComponent;
        readonly Redirect: RouterRedirectComponent;
    }
    export interface RouterLink extends Yarla.Node {

    }
    export interface RouterLinkProperties extends Yarla.ChildrenAttributes, Yarla.ClassAttributes<RouterLink> {
        readonly class?: Yarla.DOMString | Readonly<Yarla.AnyObject<boolean | null | undefined>>;
        readonly style?: Yarla.DOMString | Yarla.Nullable<Yarla.CSSStyleDeclaration>;
        readonly state?: any;
        readonly to: string;
    }
    export interface RouterLinkComponent extends Yarla.Component<RouterLinkProperties> {

    }
    export interface RouterView extends Yarla.Node {

    }
    export interface RouterViewProperties extends Yarla.ChildrenAttributes, Yarla.ClassAttributes<RouterView> {
        readonly component: Yarla.Component<RouterComponentProperties>;
        readonly path: string;
    }
    export interface RouterViewComponent extends Yarla.Component<RouterViewProperties> {

    }
    export interface RouterRedirectProperties {
        readonly state?: any;
        readonly to: string;
    }
    export interface RouterRedirectComponent extends Yarla.Component<RouterRedirectProperties> {

    }
    export interface RouterComponentProperties extends Yarla.ChildrenAttributes, Yarla.ClassAttributes {
        readonly history: History;
    }
    export interface Defer {
        push(func: Yarla.NOOP): void;
        digest(): void;
    }
    export interface EffectionCollection {
        reset(): this;
        push(effection: Yarla.Effection, dependencies?: ReadonlyArray<any>): Yarla.NOOP;
        next(effection: Yarla.Effection, dependencies?: ReadonlyArray<any>): Yarla.NOOP;
        destroy(): void;
    }
    export interface MemorableCollection {
        reset(): this;
        push<T>(factory: () => T, dependencies?: ReadonlyArray<any>): T;
        next<T>(factory: () => T, dependencies?: ReadonlyArray<any>): T;
        destroy(): void;
    }
    export interface ReferenceCollection {
        reset(): this;
        push<T>(target?: T): Yarla.RefObject<T>;
        next<T>(target?: T): Yarla.RefObject<T>;
        destroy(): void;
    }
    export interface SituationCollection {
        reset(): this;
        push<T>(state?: T): Yarla.Situation<T>;
        next<T>(state?: T): Yarla.Situation<T>;
        destroy(): void;
    }
    export interface VMFragment extends Node {
        readonly childNodes: NodeListOf<ChildNode>;
        readonly nodeType: -1;
    }
    export interface NodeListOf<T extends Node = Node> extends NodeList {
        /**
         * @deprecated 
         */
        item(index: number): T;
        forEach(callbackfn: (value: T, key: number, parent: NodeListOf<T>) => void, thisArg?: any): void;
        indexOf(node: T): number;
        splice(start: number, deleteCount?: number): T[];
        splice(start: number, deleteCount: number, ...items: T[]): T[];
        push(...items: T[]): number;
        [index: number]: T;
    }
    export interface VMRenderer<T extends Node = Node, V extends Yarla.VMNode = Yarla.VMNode> extends Yarla.Hook {
        readonly defer: Defer;
        readonly phase: number;
        readonly VMNode: V;
        readonly target: T;
        readonly parent: VMRenderer | null;
        readonly children: Array<VMRenderer>;
        readonly effections: EffectionCollection;
        readonly memorables: MemorableCollection;
        readonly references: ReferenceCollection;
        readonly situations: SituationCollection;
        create(VMNode: V, document: Document, namespaceURI: string | null, context: any): T;
        update(VMNode: V, document: Document, namespaceURI: string | null, context: any): T;
        remove(): void;
    }
    export interface VMTokenList extends Yarla.VMTokenList {

    }
}
