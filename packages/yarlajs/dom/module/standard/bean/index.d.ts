/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default bean;

declare namespace bean {
    export const behaviours: Behaviours;
    export const interfaces: Interfaces;
    export function detach(target: EventTarget, type: string, listener: Yarla.EventListenerOrEventListenerObject, opts?: Yarla.EventListenerOptions): void;
    export function attach(target: EventTarget, type: string, listener: Yarla.EventListenerOrEventListenerObject, opts?: Yarla.AddEventListenerOptions): void;
    export function replace(target: EventTarget, type: string, pairs: ReadonlyArray<Yarla.EventListenerOrEventListenerObject>, opts?: Yarla.EventListenerOptions): void;
    export function trigger(target: EventTarget, event: Event): boolean;
    export function destroy(target: EventTarget): void;
    export function wrap(argc: AnimationEvent): Yarla.AnimationEvent;
    export function wrap(argc: ClipboardEvent): Yarla.ClipboardEvent;
    export function wrap(argc: CompositionEvent): Yarla.CompositionEvent;
    export function wrap(argc: DeviceMotionEvent): Yarla.DeviceMotionEvent;
    export function wrap(argc: DeviceOrientationEvent): Yarla.DeviceOrientationEvent;
    export function wrap(argc: DragEvent): Yarla.DragEvent;
    export function wrap(argc: ErrorEvent): Yarla.ErrorEvent;
    export function wrap(argc: GamepadEvent): Yarla.GamepadEvent;
    export function wrap(argc: InputEvent): Yarla.InputEvent;
    export function wrap(argc: KeyboardEvent): Yarla.KeyboardEvent;
    export function wrap(argc: MessageEvent): Yarla.MessageEvent;
    export function wrap(argc: PageTransitionEvent): Yarla.PageTransitionEvent;
    export function wrap(argc: PointerEvent): Yarla.PointerEvent;
    export function wrap(argc: PopStateEvent): Yarla.PopStateEvent;
    export function wrap(argc: ProgressEvent): Yarla.ProgressEvent;
    export function wrap(argc: PromiseRejectionEvent): Yarla.PromiseRejectionEvent;
    export function wrap(argc: SecurityPolicyViolationEvent): Yarla.SecurityPolicyViolationEvent;
    export function wrap(argc: StorageEvent): Yarla.StorageEvent;
    export function wrap(argc: TouchEvent): Yarla.TouchEvent;
    export function wrap(argc: TransitionEvent): Yarla.TransitionEvent;
    export function wrap(argc: WheelEvent): Yarla.WheelEvent;
    export function wrap(argc: MouseEvent): Yarla.MouseEvent;
    export function wrap(argc: FocusEvent): Yarla.FocusEvent;
    export function wrap(argc: UIEvent): Yarla.UIEvent;
    export function wrap<T>(argc: CustomEvent<T>): Yarla.CustomEvent<T>;
    export function wrap(argc: Event): Yarla.Event;
    export function wrap(argc: HTMLCanvasElement): Yarla.HTMLCanvasElement;
    export function wrap(argc: HTMLFormElement): Yarla.HTMLFormElement;
    export function wrap(argc: HTMLImageElement): Yarla.HTMLImageElement;
    export function wrap(argc: HTMLInputElement): Yarla.HTMLInputElement;
    export function wrap(argc: HTMLSelectElement): Yarla.HTMLSelectElement;
    export function wrap(argc: HTMLTextAreaElement): Yarla.HTMLTextAreaElement;
    export function wrap(argc: HTMLTrackElement): Yarla.HTMLTrackElement;
    export function wrap(argc: HTMLVideoElement): Yarla.HTMLVideoElement;
    export function wrap(argc: HTMLMediaElement): Yarla.HTMLMediaElement;
    export function wrap(argc: Document): Yarla.Document;
    export function wrap(argc: Element): Yarla.Element;
    export function wrap(argc: Node): Yarla.Node;
    export function wrap(argc: Window): Yarla.Window;
    export function wrap(argc: EventTarget): Yarla.EventTarget;
    export function real(argc: Yarla.AnimationEvent): AnimationEvent;
    export function real(argc: Yarla.ClipboardEvent): ClipboardEvent;
    export function real(argc: Yarla.CompositionEvent): CompositionEvent;
    export function real(argc: Yarla.DeviceMotionEvent): DeviceMotionEvent;
    export function real(argc: Yarla.DeviceOrientationEvent): DeviceOrientationEvent;
    export function real(argc: Yarla.DragEvent): DragEvent;
    export function real(argc: Yarla.ErrorEvent): ErrorEvent;
    export function real(argc: Yarla.GamepadEvent): GamepadEvent;
    export function real(argc: Yarla.InputEvent): InputEvent;
    export function real(argc: Yarla.KeyboardEvent): KeyboardEvent;
    export function real(argc: Yarla.MessageEvent): MessageEvent;
    export function real(argc: Yarla.PageTransitionEvent): PageTransitionEvent;
    export function real(argc: Yarla.PointerEvent): PointerEvent;
    export function real(argc: Yarla.PopStateEvent): PopStateEvent;
    export function real(argc: Yarla.ProgressEvent): ProgressEvent;
    export function real(argc: Yarla.PromiseRejectionEvent): PromiseRejectionEvent;
    export function real(argc: Yarla.SecurityPolicyViolationEvent): SecurityPolicyViolationEvent;
    export function real(argc: Yarla.StorageEvent): StorageEvent;
    export function real(argc: Yarla.TouchEvent): TouchEvent;
    export function real(argc: Yarla.TransitionEvent): TransitionEvent;
    export function real(argc: Yarla.WheelEvent): WheelEvent;
    export function real(argc: Yarla.MouseEvent): MouseEvent;
    export function real(argc: Yarla.FocusEvent): FocusEvent;
    export function real(argc: Yarla.UIEvent): UIEvent;
    export function real<T>(argc: Yarla.CustomEvent<T>): CustomEvent<T>;
    export function real(argc: Yarla.Event): Event;
    export function real(argc: Yarla.HTMLCanvasElement): HTMLCanvasElement;
    export function real(argc: Yarla.HTMLFormElement): HTMLFormElement;
    export function real(argc: Yarla.HTMLImageElement): HTMLImageElement;
    export function real(argc: Yarla.HTMLInputElement): HTMLInputElement;
    export function real(argc: Yarla.HTMLSelectElement): HTMLSelectElement;
    export function real(argc: Yarla.HTMLTextAreaElement): HTMLTextAreaElement;
    export function real(argc: Yarla.HTMLTrackElement): HTMLTrackElement;
    export function real(argc: Yarla.HTMLVideoElement): HTMLVideoElement;
    export function real(argc: Yarla.HTMLMediaElement): HTMLMediaElement;
    export function real(argc: Yarla.Document): Document;
    export function real(argc: Yarla.Element): Element;
    export function real(argc: Yarla.Node): Node;
    export function real(argc: Yarla.Window): Window;
    export function real(argc: Yarla.EventTarget): EventTarget;
}

declare interface Behaviours extends Readonly<Record<string, Yarla.Proto<Yarla.Event>>> {
    readonly AnimationEvent: Yarla.Proto<Yarla.AnimationEvent>;
    readonly BeforeUnloadEvent: Yarla.Proto<Yarla.BeforeUnloadEvent>;
    readonly ClipboardEvent: Yarla.Proto<Yarla.ClipboardEvent>;
    readonly CompositionEvent: Yarla.Proto<Yarla.CompositionEvent>;
    readonly CustomEvent: Yarla.Proto<Yarla.CustomEvent>;
    readonly DeviceMotionEvent: Yarla.Proto<Yarla.DeviceMotionEvent>;
    readonly DeviceOrientationEvent: Yarla.Proto<Yarla.DeviceOrientationEvent>;
    readonly DragEvent: Yarla.Proto<Yarla.DragEvent>;
    readonly ErrorEvent: Yarla.Proto<Yarla.ErrorEvent>;
    readonly FocusEvent: Yarla.Proto<Yarla.FocusEvent>;
    readonly GamepadEvent: Yarla.Proto<Yarla.GamepadEvent>;
    readonly HashChangeEvent: Yarla.Proto<Yarla.HashChangeEvent>;
    readonly InputEvent: Yarla.Proto<Yarla.InputEvent>;
    readonly KeyboardEvent: Yarla.Proto<Yarla.KeyboardEvent>;
    readonly MessageEvent: Yarla.Proto<Yarla.MessageEvent>;
    readonly PageTransitionEvent: Yarla.Proto<Yarla.PageTransitionEvent>;
    readonly PointerEvent: Yarla.Proto<Yarla.PointerEvent>;
    readonly PopStateEvent: Yarla.Proto<Yarla.PopStateEvent>;
    readonly ProgressEvent: Yarla.Proto<Yarla.ProgressEvent>;
    readonly PromiseRejectionEvent: Yarla.Proto<Yarla.PromiseRejectionEvent>;
    readonly SecurityPolicyViolationEvent: Yarla.Proto<Yarla.SecurityPolicyViolationEvent>;
    readonly StorageEvent: Yarla.Proto<Yarla.StorageEvent>;
    readonly TouchEvent: Yarla.Proto<Yarla.TouchEvent>;
    readonly TransitionEvent: Yarla.Proto<Yarla.TransitionEvent>;
    readonly WheelEvent: Yarla.Proto<Yarla.WheelEvent>;
    readonly MouseEvent: Yarla.Proto<Yarla.MouseEvent>;
    readonly UIEvent: Yarla.Proto<Yarla.UIEvent>;
    readonly Event: Yarla.Proto<Yarla.Event>;
}

declare interface Interfaces extends Readonly<Record<string, Yarla.Proto<Yarla.EventTarget>>> {
    readonly HTMLAnchorElement: Yarla.Proto<Yarla.HTMLAnchorElement>;
    readonly HTMLAreaElement: Yarla.Proto<Yarla.HTMLAreaElement>;
    readonly HTMLAudioElement: Yarla.Proto<Yarla.HTMLAudioElement>;
    readonly HTMLBRElement: Yarla.Proto<Yarla.HTMLBRElement>;
    readonly HTMLBaseElement: Yarla.Proto<Yarla.HTMLBaseElement>;
    readonly HTMLBodyElement: Yarla.Proto<Yarla.HTMLBodyElement>;
    readonly HTMLButtonElement: Yarla.Proto<Yarla.HTMLButtonElement>;
    readonly HTMLCanvasElement: Yarla.Proto<Yarla.HTMLCanvasElement>;
    readonly HTMLDListElement: Yarla.Proto<Yarla.HTMLDListElement>;
    readonly HTMLDataElement: Yarla.Proto<Yarla.HTMLDataElement>;
    readonly HTMLDataListElement: Yarla.Proto<Yarla.HTMLDataListElement>;
    readonly HTMLDetailsElement: Yarla.Proto<Yarla.HTMLDetailsElement>;
    readonly HTMLDialogElement: Yarla.Proto<Yarla.HTMLDialogElement>;
    readonly HTMLDivElement: Yarla.Proto<Yarla.HTMLDivElement>;
    readonly HTMLEmbedElement: Yarla.Proto<Yarla.HTMLEmbedElement>;
    readonly HTMLFieldSetElement: Yarla.Proto<Yarla.HTMLFieldSetElement>;
    readonly HTMLFormElement: Yarla.Proto<Yarla.HTMLFormElement>;
    readonly HTMLHRElement: Yarla.Proto<Yarla.HTMLHRElement>;
    readonly HTMLHeadElement: Yarla.Proto<Yarla.HTMLHeadElement>;
    readonly HTMLHeadingElement: Yarla.Proto<Yarla.HTMLHeadingElement>;
    readonly HTMLHtmlElement: Yarla.Proto<Yarla.HTMLHtmlElement>;
    readonly HTMLIFrameElement: Yarla.Proto<Yarla.HTMLIFrameElement>;
    readonly HTMLImageElement: Yarla.Proto<Yarla.HTMLImageElement>;
    readonly HTMLInputElement: Yarla.Proto<Yarla.HTMLInputElement>;
    readonly HTMLLIElement: Yarla.Proto<Yarla.HTMLLIElement>;
    readonly HTMLLabelElement: Yarla.Proto<Yarla.HTMLLabelElement>;
    readonly HTMLLegendElement: Yarla.Proto<Yarla.HTMLLegendElement>;
    readonly HTMLLinkElement: Yarla.Proto<Yarla.HTMLLinkElement>;
    readonly HTMLMenuElement: Yarla.Proto<Yarla.HTMLMenuElement>;
    readonly HTMLMetaElement: Yarla.Proto<Yarla.HTMLMetaElement>;
    readonly HTMLMeterElement: Yarla.Proto<Yarla.HTMLMeterElement>;
    readonly HTMLModElement: Yarla.Proto<Yarla.HTMLModElement>;
    readonly HTMLOListElement: Yarla.Proto<Yarla.HTMLOListElement>;
    readonly HTMLObjectElement: Yarla.Proto<Yarla.HTMLObjectElement>;
    readonly HTMLOptGroupElement: Yarla.Proto<Yarla.HTMLOptGroupElement>;
    readonly HTMLOptionElement: Yarla.Proto<Yarla.HTMLOptionElement>;
    readonly HTMLOutputElement: Yarla.Proto<Yarla.HTMLOutputElement>;
    readonly HTMLParagraphElement: Yarla.Proto<Yarla.HTMLParagraphElement>;
    readonly HTMLParamElement: Yarla.Proto<Yarla.HTMLParamElement>;
    readonly HTMLPictureElement: Yarla.Proto<Yarla.HTMLPictureElement>;
    readonly HTMLPortalElement: Yarla.Proto<Yarla.HTMLPortalElement>;
    readonly HTMLPreElement: Yarla.Proto<Yarla.HTMLPreElement>;
    readonly HTMLProgressElement: Yarla.Proto<Yarla.HTMLProgressElement>;
    readonly HTMLQuoteElement: Yarla.Proto<Yarla.HTMLQuoteElement>;
    readonly HTMLScriptElement: Yarla.Proto<Yarla.HTMLScriptElement>;
    readonly HTMLSelectElement: Yarla.Proto<Yarla.HTMLSelectElement>;
    readonly HTMLSlotElement: Yarla.Proto<Yarla.HTMLSlotElement>;
    readonly HTMLSourceElement: Yarla.Proto<Yarla.HTMLSourceElement>;
    readonly HTMLSpanElement: Yarla.Proto<Yarla.HTMLSpanElement>;
    readonly HTMLStyleElement: Yarla.Proto<Yarla.HTMLStyleElement>;
    readonly HTMLTableCaptionElement: Yarla.Proto<Yarla.HTMLTableCaptionElement>;
    readonly HTMLTableCellElement: Yarla.Proto<Yarla.HTMLTableCellElement>;
    readonly HTMLTableColElement: Yarla.Proto<Yarla.HTMLTableColElement>;
    readonly HTMLTableElement: Yarla.Proto<Yarla.HTMLTableElement>;
    readonly HTMLTableRowElement: Yarla.Proto<Yarla.HTMLTableRowElement>;
    readonly HTMLTableSectionElement: Yarla.Proto<Yarla.HTMLTableSectionElement>;
    readonly HTMLTemplateElement: Yarla.Proto<Yarla.HTMLTemplateElement>;
    readonly HTMLTextAreaElement: Yarla.Proto<Yarla.HTMLTextAreaElement>;
    readonly HTMLTimeElement: Yarla.Proto<Yarla.HTMLTimeElement>;
    readonly HTMLTitleElement: Yarla.Proto<Yarla.HTMLTitleElement>;
    readonly HTMLTrackElement: Yarla.Proto<Yarla.HTMLTrackElement>;
    readonly HTMLUListElement: Yarla.Proto<Yarla.HTMLUListElement>;
    readonly HTMLVideoElement: Yarla.Proto<Yarla.HTMLVideoElement>;
    readonly HTMLMediaElement: Yarla.Proto<Yarla.HTMLMediaElement>;
    readonly HTMLElement: Yarla.Proto<Yarla.HTMLElement>;
    readonly MathMLElement: Yarla.Proto<Yarla.MathMLElement>;
    readonly SVGElement: Yarla.Proto<Yarla.SVGElement>;
    readonly Document: Yarla.Proto<Yarla.Document>;
    readonly Element: Yarla.Proto<Yarla.Element>;
    readonly Node: Yarla.Proto<Yarla.Node>;
    readonly Window: Yarla.Proto<Yarla.Window>;
    readonly XMLHttpRequest: Yarla.Proto<Yarla.EventTarget>;
    readonly EventTarget: Yarla.Proto<Yarla.EventTarget>;
}
