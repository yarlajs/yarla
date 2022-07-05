import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import document from "@yarlajs/core/module/internal/document/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import createInstance from "@yarlajs/core/module/standard/createInstance/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import className from "@yarlajs/core/module/standard/className/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import isObject from "@yarlajs/core/lib/isObject/index.js";
import Promise from "@yarlajs/core/lib/Promise/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import zone from "@yarlajs/core/lib/zone/index.js";
import VMTokenList from "../VMTokenList/index.js";
import isConnected from "../isConnected/index.js";
import contains from "../contains/index.js";
import env from "../../constant/env/index.js";

export default (function () {
    /**
     * 
     * @param {Event | EventTarget | null | undefined} argc 
     * @returns {any}
     */
    function wrap(
        argc
    ) {
        if (isInstanceOf(argc, Originator)) {
            return argc;
        }
        if (isInstanceOf(argc, globalThis.Event)) {
            return make(argc, behaviours, behaviours.Event);
        }
        if (isInstanceOf(argc, globalThis.EventTarget)) {
            return make(argc, interfaces, interfaces.EventTarget);
        }
        if (isInstanceOf(argc, globalThis.XMLHttpRequest)) {
            return make(argc, interfaces, interfaces.XMLHttpRequest);
        }
        if (isInstanceOf(argc, globalThis.Document)) {
            return make(argc, interfaces, interfaces.Document);
        }
        if (isInstanceOf(argc, globalThis.Element)) {
            return make(argc, interfaces, interfaces.Element);
        }
        if (isInstanceOf(argc, globalThis.Window)) {
            return make(argc, interfaces, interfaces.Window);
        }
        if (isInstanceOf(argc, globalThis.Node)) {
            return make(argc, interfaces, interfaces.Node);
        }
        return null;
    }
    /**
     * 
     * @param {Yarla.Event | Yarla.EventTarget} argc 
     * @returns {AnimationEvent & ClipboardEvent & CompositionEvent & DeviceMotionEvent & DeviceOrientationEvent & DragEvent & ErrorEvent & GamepadEvent & InputEvent & KeyboardEvent & MessageEvent & PageTransitionEvent & PointerEvent & PopStateEvent & ProgressEvent & PromiseRejectionEvent & SecurityPolicyViolationEvent & StorageEvent & TouchEvent & TransitionEvent & WheelEvent & MouseEvent & FocusEvent & UIEvent & CustomEvent & Event & HTMLCanvasElement & HTMLFormElement & HTMLImageElement & HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement & HTMLTrackElement & HTMLVideoElement & HTMLMediaElement & Element & Window & EventTarget}
     */
    function real(
        argc
    ) {
        return isInstanceOf(argc, Originator) ? Reflect.get(argc, Reflect.expr.INSTANCE) : argc;
    }
    /**
     * 
     * @param {any} argc 
     * @param {Readonly<Record<string, Yarla.Proto<T>>>} classes 
     * @param {Yarla.Proto<T>} constructor 
     * @returns {Yarla.NonAny<T>}
     * @template T
     */
    function make(
        argc,
        classes,
        constructor
    ) {
        if (isNullOrUndefined(argc)) {
            // @ts-ignore
            return null;
        }
        if (Reflect.has(argc, Reflect.expr.INSTANCE)) {
            return Reflect.get(argc, Reflect.expr.INSTANCE);
        }
        var name = argc.constructor.name || className(argc);
        if (name in classes) {
            constructor = classes[name];
        } else {
            for (name in classes) {
                if (isInstanceOf(argc, globalThis[name])) {
                    constructor = classes[name];
                    break;
                }
            }
        }
        var item = createInstance(constructor);
        Reflect.set(item, Reflect.expr.INSTANCE, argc);
        Reflect.set(argc, Reflect.expr.INSTANCE, item);
        return item;
    }
    /**
     * 
     * @param {Event} event 
     * @param {boolean} capture 
     */
    function allot(
        event,
        capture
    ) {
        var type = event.type;
        var item = event.currentTarget;
        if (isNullOrUndefined(item)) {
            return;
        }
        if (Reflect.has(event, Reflect.expr.STOP_AFTERWARD)) {
            return;
        }
        var expr;
        if (capture) {
            expr = Reflect.expr.EVENT_CAPTURE.concat(type);
        } else {
            expr = Reflect.expr.EVENT_GENERAL.concat(type);
        }
        var lump;
        if (Reflect.has(item, expr)) {
            lump = Reflect.get(item, expr);
        } else {
            return;
        }
        /** @type {ReadonlyArray<Yarla.EventListenerOrEventListenerObject>} */
        var live = lump.live.slice(0);
        /** @type {ReadonlyArray<Yarla.EventListenerOrEventListenerObject>} */
        var once = lump.once.slice(0);
        //
        for (var
            i = 0,
            l = live.length;
            i < l;
            i++
        ) {
            var listener = live[i];
            if (isFunction(listener)) {
                listener.call(wrap(item), wrap(event));
            } else {
                listener.handleEvent(wrap(event));
            }
            if (once.indexOf(listener) !== -1) {
                if (exclude(lump.live, listener)) {
                    if (item.removeEventListener) {
                        item.removeEventListener(type, handleEvent, capture);
                    }
                }
                exclude(lump.once, listener);
            }
            if (Reflect.has(event, Reflect.expr.STOP_IMMEDIATE)) {
                break;
            }
        }
    }
    /**
     * 
     * @param {EventTarget} argc 
     * @param {string} type 
     * @param {Yarla.EventListenerOrEventListenerObject} listener 
     * @param {Yarla.AddEventListenerOptions} [opts] 
     */
    function attach(
        argc,
        type,
        listener,
        opts
    ) {
        var once;
        var passive;
        var capture;
        if (isObject(opts)) {
            once = !!opts.once;
            passive = !!opts.passive;
            capture = !!opts.capture;
        } else {
            once = false;
            passive = false;
            capture = !!opts;
        }
        var expr;
        if (capture) {
            expr = Reflect.expr.EVENT_CAPTURE.concat(type);
        } else {
            expr = Reflect.expr.EVENT_GENERAL.concat(type);
        }
        var lump;
        if (Reflect.has(argc, expr)) {
            lump = Reflect.get(argc, expr);
        } else {
            lump = Reflect.set(argc, expr, { live: [], once: [] });
        }
        if (include(lump.live, listener)) {
            if (argc.addEventListener) {
                argc.addEventListener(type, handleEvent, env.PASSIVED ? {
                    capture: capture,
                    passive: passive,
                } : capture);
            }
        }
        if (once) {
            include(lump.once, listener);
        }
    }
    /**
     * 
     * @param {EventTarget} argc 
     * @param {string} type 
     * @param {Yarla.EventListenerOrEventListenerObject} listener 
     * @param {Yarla.EventListenerOptions} [opts] 
     */
    function detach(
        argc,
        type,
        listener,
        opts
    ) {
        var capture;
        if (isObject(opts)) {
            capture = !!opts.capture;
        } else {
            capture = !!opts;
        }
        var expr;
        if (capture) {
            expr = Reflect.expr.EVENT_CAPTURE.concat(type);
        } else {
            expr = Reflect.expr.EVENT_GENERAL.concat(type);
        }
        var lump;
        if (Reflect.has(argc, expr)) {
            lump = Reflect.get(argc, expr);
        } else {
            return;
        }
        if (exclude(lump.live, listener)) {
            if (argc.removeEventListener) {
                argc.removeEventListener(type, handleEvent, capture);
            }
        }
    }
    /**
     * 
     * @param {EventTarget} argc 
     * @param {Yarla.NOOP} listener 
     */
    function jacket(
        argc,
        listener
    ) {
        var lump;
        if (Reflect.has(argc, Reflect.expr.EVENT_OBSERVE)) {
            lump = Reflect.get(argc, Reflect.expr.EVENT_OBSERVE);
        } else {
            lump = Reflect.set(argc, Reflect.expr.EVENT_OBSERVE, []);
        }
        include(lump, listener);
        return function () {
            return exclude(lump, listener), listener.call(argc);
        };
    }
    /**
     * 
     * @param {EventTarget} argc 
     * @param {string} type 
     * @param {Yarla.EventListenerOrEventListenerObject[]} pairs 
     * @param {Yarla.EventListenerOptions} [opts] 
     */
    function replace(
        argc,
        type,
        pairs,
        opts
    ) {
        var capture;
        if (isObject(opts)) {
            capture = !!opts.capture;
        } else {
            capture = !!opts;
        }
        var expr;
        if (capture) {
            expr = Reflect.expr.EVENT_CAPTURE.concat(type);
        } else {
            expr = Reflect.expr.EVENT_GENERAL.concat(type);
        }
        var lump;
        if (Reflect.has(argc, expr)) {
            lump = Reflect.get(argc, expr);
        } else {
            return;
        }
        var loc;
        if ((loc = lump.live.indexOf(pairs[0])) !== -1) {
            lump.live[loc] = pairs[1];
        }
        if ((loc = lump.once.indexOf(pairs[0])) !== -1) {
            lump.once[loc] = pairs[1];
        }
    }
    /**
     * 
     * @param {EventTarget} argc 
     * @param {Event} event 
     */
    function trigger(
        argc,
        event
    ) {
        if (argc.dispatchEvent) {
            argc.dispatchEvent(event);
        } else {
            handleEvent(defineProperties(event, {
                eventPhase: generateGetterDescriptor(
                    function () {
                        return Event.AT_TARGET;
                    }
                ),
                currentTarget: generateGetterDescriptor(
                    function () {
                        return argc;
                    }
                ),
                target: generateGetterDescriptor(
                    function () {
                        return argc;
                    }
                ),
            }));
        }
        return event.defaultPrevented;
    }
    /**
     * 
     * @param {EventTarget} argc 
     */
    function destroy(
        argc
    ) {
        var type;
        if (argc.removeEventListener) {
            if (Reflect.has(argc, Reflect.expr.EVENT_CAPTURE)) {
                for (type in Reflect.get(argc, Reflect.expr.EVENT_CAPTURE)) {
                    argc.removeEventListener(type, handleEvent, true);
                }
            }
            if (Reflect.has(argc, Reflect.expr.EVENT_GENERAL)) {
                for (type in Reflect.get(argc, Reflect.expr.EVENT_GENERAL)) {
                    argc.removeEventListener(type, handleEvent, false);
                }
            }
        }
        if (Reflect.has(argc, Reflect.expr.EVENT_OBSERVE)) {
            for (var
                i = 0,
                s = Reflect.get(argc, Reflect.expr.EVENT_OBSERVE).slice(0),
                l = s.length;
                i < l;
                i++
            ) {
                s[i].call(argc);
            }
        }
        Reflect.delete(argc);
    }
    /**
     * 
     * @param {Array<T>} container 
     * @param {T} item
     * @returns {boolean}
     * @template T
     */
    function include(
        container,
        item
    ) {
        var loc = container.indexOf(item);
        if (loc === -1) {
            return container.push(item) === 1;
        }
        return false;
    }
    /**
     * 
     * @param {Array<T>} container 
     * @param {T} item
     * @returns {boolean}
     * @template T
     */
    function exclude(
        container,
        item
    ) {
        var loc = container.indexOf(item);
        if (loc !== -1) {
            container.splice(loc, 1);
            return !container.length;
        }
        return false;
    }
    /**
     * 
     * @param {Event} event 
     */
    function handleEvent(
        event
    ) {
        var eventPhase = event.eventPhase;
        if (eventPhase === Event.CAPTURING_PHASE ||
            eventPhase === Event.AT_TARGET) {
            allot(event, true);
        }
        if (eventPhase === Event.BUBBLING_PHASE ||
            eventPhase === Event.AT_TARGET) {
            allot(event, false);
        }
        if (Reflect.has(event, Reflect.expr.TICK_PREVENTED)) {
            return;
        }
        zone.forceUpdate();
    }
    var Originator = generateClass(Reflect.BASE, {}, NOOP);
    var behaviours = (function () {
        var Event = generateClass(Reflect.BASE, {
            type: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).type;
                }
            ),
            bubbles: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).bubbles;
                }
            ),
            cancelable: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).cancelable;
                }
            ),
            composed: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).composed;
                }
            ),
            isTrusted: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).isTrusted;
                }
            ),
            defaultPrevented: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).defaultPrevented;
                }
            ),
            eventPhase: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).eventPhase;
                }
            ),
            timeStamp: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).timeStamp;
                }
            ),
            target: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return wrap(real(this).target);
                }
            ),
            currentTarget: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return wrap(real(this).currentTarget);
                }
            ),
            stopImmediatePropagation: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    var item = real(this);
                    Reflect.set(item, Reflect.expr.STOP_AFTERWARD, true);
                    Reflect.set(item, Reflect.expr.STOP_IMMEDIATE, true);
                    item.stopImmediatePropagation();
                }
            ),
            stopPropagation: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    var item = real(this);
                    Reflect.set(item, Reflect.expr.STOP_AFTERWARD, true);
                    item.stopPropagation();
                }
            ),
            preventDefault: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    real(this).preventDefault();
                }
            ),
            ignoreUpdate: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    Reflect.set(real(this), Reflect.expr.TICK_PREVENTED, true);
                }
            ),
        }, Originator, "Event");
        var UIEvent = generateClass(Reflect.BASE, {
            detail: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).detail;
                }
            ),
            view: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return wrap(real(this).view);
                }
            ),
        }, Event, "UIEvent");
        var MouseEvent = generateClass(Reflect.BASE, {
            altKey: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).altKey;
                }
            ),
            button: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).button;
                }
            ),
            buttons: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).buttons;
                }
            ),
            clientX: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).clientX;
                }
            ),
            clientY: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).clientY;
                }
            ),
            ctrlKey: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).ctrlKey;
                }
            ),
            metaKey: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).metaKey;
                }
            ),
            movementX: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).movementX;
                }
            ),
            movementY: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).movementY;
                }
            ),
            offsetX: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).offsetX;
                }
            ),
            offsetY: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).offsetY;
                }
            ),
            pageX: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).pageX;
                }
            ),
            pageY: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).pageY;
                }
            ),
            relatedTarget: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return wrap(real(this).relatedTarget);
                }
            ),
            screenX: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).screenX;
                }
            ),
            screenY: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).screenY;
                }
            ),
            shiftKey: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).shiftKey;
                }
            ),
            x: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).x;
                }
            ),
            y: generateGetterDescriptor(
                /**
                 * 
                 * @this {any}
                 */
                function () {
                    return real(this).y;
                }
            ),
            getModifierState: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} keyArg 
                 */
                function (
                    keyArg
                ) {
                    return real(this).getModifierState(keyArg);
                }
            ),
        }, UIEvent, "MouseEvent");
        var AnimationEvent = generateClass(Reflect.BASE, {
            animationName: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).animationName;
                }
            ),
            elapsedTime: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).elapsedTime;
                }
            ),
            pseudoElement: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pseudoElement;
                }
            ),
        }, Event, "AnimationEvent");
        var BeforeUnloadEvent = generateClass(Reflect.BASE, {
        }, Event, "BeforeUnloadEvent");
        var ClipboardEvent = generateClass(Reflect.BASE, {
            clipboardData: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).clipboardData;
                }
            ),
        }, Event, "ClipboardEvent");
        var CompositionEvent = generateClass(Reflect.BASE, {
            data: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).data;
                }
            ),
        }, Event, "CompositionEvent");
        var CustomEvent = generateClass(Reflect.BASE, {
            detail: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).detail;
                }
            ),
        }, Event, "CustomEvent");
        var DeviceMotionEvent = generateClass(Reflect.BASE, {
            acceleration: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).acceleration;
                }
            ),
            accelerationIncludingGravity: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).accelerationIncludingGravity;
                }
            ),
            interval: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).interval;
                }
            ),
            rotationRate: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).rotationRate;
                }
            ),
        }, Event, "DeviceMotionEvent");
        var DeviceOrientationEvent = generateClass(Reflect.BASE, {
            absolute: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).absolute;
                }
            ),
            alpha: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).alpha;
                }
            ),
            beta: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).beta;
                }
            ),
            gamma: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).gamma;
                }
            ),
        }, Event, "DeviceOrientationEvent");
        var DragEvent = generateClass(Reflect.BASE, {
            dataTransfer: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).dataTransfer;
                }
            ),
        }, Event, "DragEvent");
        var ErrorEvent = generateClass(Reflect.BASE, {
            colno: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).colno;
                }
            ),
            error: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).error;
                }
            ),
            filename: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).filename;
                }
            ),
            lineno: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).lineno;
                }
            ),
            message: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).message;
                }
            ),
        }, Event, "ErrorEvent");
        var FocusEvent = generateClass(Reflect.BASE, {
            relatedTarget: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return wrap(real(this).relatedTarget);
                }
            ),
        }, UIEvent, "FocusEvent");
        var GamepadEvent = generateClass(Reflect.BASE, {
            gamepad: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).gamepad;
                }
            ),
        }, Event, "GamepadEvent");
        var HashChangeEvent = generateClass(Reflect.BASE, {
        }, Event, "HashChangeEvent");
        var InputEvent = generateClass(Reflect.BASE, {
            data: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).data;
                }
            ),
            inputType: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).inputType;
                }
            ),
            isComposing: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).isComposing;
                }
            ),
        }, UIEvent, "InputEvent");
        var KeyboardEvent = generateClass(Reflect.BASE, {
            key: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).key;
                }
            ),
            code: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).code;
                }
            ),
            altKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).altKey;
                }
            ),
            ctrlKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).ctrlKey;
                }
            ),
            metaKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).metaKey;
                }
            ),
            shiftKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).shiftKey;
                }
            ),
            isComposing: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).isComposing;
                }
            ),
            location: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).location;
                }
            ),
            repeat: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).repeat;
                }
            ),
            getModifierState: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} keyArg 
                 */
                function (
                    keyArg
                ) {
                    return real(this).getModifierState(keyArg);
                }
            ),
        }, UIEvent, "KeyboardEvent");
        var MessageEvent = generateClass(Reflect.BASE, {
            data: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).data;
                }
            ),
            lastEventId: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).lastEventId;
                }
            ),
            origin: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).origin;
                }
            ),
            ports: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).ports;
                }
            ),
            source: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).source;
                }
            ),
        }, Event, "MessageEvent");
        var PageTransitionEvent = generateClass(Reflect.BASE, {
            persisted: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).persisted;
                }
            ),
        }, Event, "PageTransitionEvent");
        var PointerEvent = generateClass(Reflect.BASE, {
            height: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).height;
                }
            ),
            isPrimary: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).isPrimary;
                }
            ),
            pointerId: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pointerId;
                }
            ),
            pointerType: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pointerType;
                }
            ),
            pressure: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pressure;
                }
            ),
            tangentialPressure: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).tangentialPressure;
                }
            ),
            tiltX: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).tiltX;
                }
            ),
            tiltY: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).tiltY;
                }
            ),
            twist: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).twist;
                }
            ),
            width: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).width;
                }
            ),
        }, MouseEvent, "PointerEvent");
        var PopStateEvent = generateClass(Reflect.BASE, {
            state: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).state;
                }
            ),
        }, Event, "PopStateEvent");
        var ProgressEvent = generateClass(Reflect.BASE, {
            lengthComputable: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).lengthComputable;
                }
            ),
            loaded: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).loaded;
                }
            ),
            total: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).total;
                }
            ),
        }, Event, "ProgressEvent");
        var PromiseRejectionEvent = generateClass(Reflect.BASE, {
            reason: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).reason;
                }
            ),
        }, Event, "PromiseRejectionEvent");
        var SecurityPolicyViolationEvent = generateClass(Reflect.BASE, {
            blockedURI: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).blockedURI;
                }
            ),
            columnNumber: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).columnNumber;
                }
            ),
            documentURI: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).documentURI;
                }
            ),
            effectiveDirective: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).effectiveDirective;
                }
            ),
            lineNumber: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).lineNumber;
                }
            ),
            originalPolicy: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).originalPolicy;
                }
            ),
            referrer: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).referrer;
                }
            ),
            sourceFile: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).sourceFile;
                }
            ),
            statusCode: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).statusCode;
                }
            ),
            violatedDirective: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).violatedDirective;
                }
            ),
        }, Event, "SecurityPolicyViolationEvent");
        var StorageEvent = generateClass(Reflect.BASE, {
            key: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).key;
                }
            ),
            newValue: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).newValue;
                }
            ),
            oldValue: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).oldValue;
                }
            ),
            storageArea: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).storageArea;
                }
            ),
            url: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).url;
                }
            ),
        }, Event, "StorageEvent");
        var TouchEvent = generateClass(Reflect.BASE, {
            altKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).altKey;
                }
            ),
            changedTouches: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).changedTouches;
                }
            ),
            ctrlKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).ctrlKey;
                }
            ),
            metaKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).metaKey;
                }
            ),
            shiftKey: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).shiftKey;
                }
            ),
            targetTouches: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).targetTouches;
                }
            ),
            touches: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).touches;
                }
            ),
        }, UIEvent, "TouchEvent");
        var TransitionEvent = generateClass(Reflect.BASE, {
            elapsedTime: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).elapsedTime;
                }
            ),
            propertyName: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).propertyName;
                }
            ),
            pseudoElement: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pseudoElement;
                }
            ),
        }, Event, "TransitionEvent");
        var WheelEvent = generateClass(Reflect.BASE, {
            deltaMode: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).deltaMode;
                }
            ),
            deltaX: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).deltaX;
                }
            ),
            deltaY: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).deltaY;
                }
            ),
            deltaZ: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).deltaZ;
                }
            ),
        }, MouseEvent, "WheelEvent");
        /**
         * 
         */
        return {
            AnimationEvent: AnimationEvent,
            BeforeUnloadEvent: BeforeUnloadEvent,
            ClipboardEvent: ClipboardEvent,
            CompositionEvent: CompositionEvent,
            CustomEvent: CustomEvent,
            DeviceMotionEvent: DeviceMotionEvent,
            DeviceOrientationEvent: DeviceOrientationEvent,
            DragEvent: DragEvent,
            ErrorEvent: ErrorEvent,
            FocusEvent: FocusEvent,
            GamepadEvent: GamepadEvent,
            HashChangeEvent: HashChangeEvent,
            InputEvent: InputEvent,
            KeyboardEvent: KeyboardEvent,
            MessageEvent: MessageEvent,
            PageTransitionEvent: PageTransitionEvent,
            PointerEvent: PointerEvent,
            PopStateEvent: PopStateEvent,
            ProgressEvent: ProgressEvent,
            PromiseRejectionEvent: PromiseRejectionEvent,
            SecurityPolicyViolationEvent: SecurityPolicyViolationEvent,
            StorageEvent: StorageEvent,
            TouchEvent: TouchEvent,
            TransitionEvent: TransitionEvent,
            WheelEvent: WheelEvent,
            MouseEvent: MouseEvent,
            UIEvent: UIEvent,
            Event: Event,
        };
    }());
    var interfaces = (function () {
        var EventTarget = generateClass(Reflect.BASE, {
            listen: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} type 
                 * @param {Yarla.EventListenerOrEventListenerObject} listener 
                 * @param {Yarla.AddEventListenerOptions} [opts] 
                 */
                function (
                    type,
                    listener,
                    opts
                ) {
                    var item = real(this);
                    attach(item, type, listener, opts);
                    return {
                        cancel: skrinkSerializer(
                            function () {
                                detach(item, type, listener, opts);
                            }
                        ),
                    };
                }
            ),
            dispatch: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} type 
                 * @param {any=} detail 
                 * @param {boolean=} bubbles 
                 * @param {boolean=} cancelable 
                 */
                function (
                    type,
                    detail,
                    bubbles,
                    cancelable
                ) {
                    var item = real(this);
                    var meta;
                    var data;
                    try {
                        data = new CustomEvent(type, {
                            cancelable: !!cancelable,
                            bubbles: !!bubbles,
                            detail: detail,
                        });
                    } catch (_) {
                        meta = item.ownerDocument || document;
                        data = meta.createEvent("CustomEvent");
                        data.initCustomEvent(type, !!bubbles, !!cancelable, detail);
                    }
                    return trigger(item, data);
                }
            ),
        }, Originator, "EventTarget");
        var XMLHttpRequest = generateClass(Reflect.BASE, {
        }, EventTarget, "XMLHttpRequest");
        var Window = generateClass(Reflect.BASE, {
        }, EventTarget, "Window");
        var Node = generateClass(Reflect.BASE, {
            nodeName: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).nodeName;
                }
            ),
            nodeType: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).nodeType;
                }
            ),
            textContent: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).textContent;
                }
            ),
            isConnected: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return isConnected(real(this));
                }
            ),
            listenTo: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} type 
                 * @param {Yarla.EventListenerOrEventListenerObject} listener 
                 * @param {Yarla.AddEventListenerOptions} [opts] 
                 */
                function (
                    type,
                    listener,
                    opts
                ) {
                    var item = real(this);
                    var meta = item.ownerDocument || document;
                    var view = meta.defaultView || globalThis;
                    attach(view, type, listener, opts);
                    return {
                        cancel: skrinkSerializer(
                            jacket(item, function () {
                                detach(view, type, listener, opts);
                            })
                        ),
                    };
                }
            ),
            contains: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {Yarla.Node} element
                 */
                function (
                    element
                ) {
                    return contains(real(this), real(element));
                }
            ),
        }, EventTarget, "Node");
        var Document = generateClass(Reflect.BASE, {
            isDefaultNamespace: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string | null} namespace
                 */
                function (namespace) {
                    return real(this).isDefaultNamespace(namespace);
                }
            ),
        }, Node, "Document");
        var Element = generateClass(Reflect.BASE, {
            innerHTML: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).innerHTML;
                }
            ),
            outerHTML: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).outerHTML;
                }
            ),
            className: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).className;
                }
            ),
            classList: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return Reflect.once(this, Reflect.expr.CLASS_MANAGER, function () {
                        return VMTokenList.init(real(this));
                    });
                }
            ),
            clientHeight: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).clientHeight;
                }
            ),
            clientLeft: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).clientLeft;
                }
            ),
            clientTop: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).clientTop;
                }
            ),
            clientWidth: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).clientWidth;
                }
            ),
            scrollHeight: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).scrollHeight;
                }
            ),
            scrollLeft: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).scrollLeft;
                }
            ),
            scrollTop: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).scrollTop;
                }
            ),
            scrollWidth: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).scrollWidth;
                }
            ),
            getBoundingClientRect: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).getBoundingClientRect();
                }
            ),
            scrollTo: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {number} x
                 * @param {number} y
                 * @param {ScrollBehavior=} behavior
                 */
                function (
                    x,
                    y,
                    behavior
                ) {
                    var item = real(this);
                    if (item.scrollTo) {
                        if (env.BEHAVIOR) {
                            item.scrollTo({
                                behavior: behavior,
                                left: x,
                                top: y,
                            });
                        } else {
                            item.scrollTo(x, y);
                        }
                    } else {
                        item.scrollLeft = x;
                        item.scrollTop = y;
                    }
                }
            ),
            matches: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} selectors 
                 */
                function (
                    selectors
                ) {
                    var item = real(this);
                    if (item.matches) {
                        return item.matches(selectors);
                    }
                    if (item.matchesSelector) {
                        return item.matchesSelector(selectors);
                    }
                    if (item.webkitMatchesSelector) {
                        return item.webkitMatchesSelector(selectors);
                    }
                    if (item.mozMatchesSelector) {
                        return item.mozMatchesSelector(selectors);
                    }
                    if (item.msMatchesSelector) {
                        return item.msMatchesSelector(selectors);
                    }
                    if (item.oMatchesSelector) {
                        return item.oMatchesSelector(selectors);
                    }
                    var meta = item.ownerDocument || document;
                    for (var
                        i = 0,
                        n = meta.querySelectorAll(selectors),
                        l = n.length;
                        i < l;
                        i++
                    ) {
                        if (item === n[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            ),
        }, Node, "Element");
        var HTMLElement = generateClass(Reflect.BASE, {
        }, Element, "HTMLElement");
        var HTMLMediaElement = generateClass(Reflect.BASE, {
            buffered: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).buffered;
                }
            ),
            currentSrc: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).currentSrc;
                }
            ),
            duration: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).duration;
                }
            ),
            ended: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).ended;
                }
            ),
            error: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).error;
                }
            ),
            networkState: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).networkState;
                }
            ),
            paused: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).paused;
                }
            ),
            played: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).played;
                }
            ),
            readyState: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).readyState;
                }
            ),
            seekable: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).seekable;
                }
            ),
            seeking: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).seeking;
                }
            ),
            load: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).load();
                }
            ),
            pause: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).pause();
                }
            ),
            play: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return Promise.resolve(real(this).play());
                }
            ),
        }, HTMLElement, "HTMLMediaElement");
        var HTMLAnchorElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLAnchorElement");
        var HTMLAreaElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLAreaElement");
        var HTMLAudioElement = generateClass(Reflect.BASE, {
        }, HTMLMediaElement, "HTMLAudioElement");
        var HTMLBRElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLBRElement");
        var HTMLBaseElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLBaseElement");
        var HTMLBodyElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLBodyElement");
        var HTMLButtonElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLButtonElement");
        var HTMLCanvasElement = generateClass(Reflect.BASE, {
            getContext: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} contextId 
                 * @param {CanvasRenderingContext2DSettings} [opts] 
                 */
                function (
                    contextId,
                    opts
                ) {
                    return real(this).getContext(contextId, opts);
                }
            ),
            toDataURL: generateMethodDescriptor(
                /**
                 * 
                 * @this {any}
                 * @param {string} type 
                 * @param {number} [quality] 
                 */
                function (
                    type,
                    quality
                ) {
                    return real(this).toDataURL(type, quality);
                }
            ),
        }, HTMLElement, "HTMLCanvasElement");
        var HTMLDListElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDListElement");
        var HTMLDataElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDataElement");
        var HTMLDataListElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDataListElement");
        var HTMLDetailsElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDetailsElement");
        var HTMLDialogElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDialogElement");
        var HTMLDivElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLDivElement");
        var HTMLEmbedElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLEmbedElement");
        var HTMLFieldSetElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLFieldSetElement");
        var HTMLFormElement = generateClass(Reflect.BASE, {
            reset: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).reset();
                }
            ),
            submit: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).submit();
                }
            ),
        }, HTMLElement, "HTMLFormElement");
        var HTMLHRElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLHRElement");
        var HTMLHeadElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLHeadElement");
        var HTMLHeadingElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLHeadingElement");
        var HTMLHtmlElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLHtmlElement");
        var HTMLIFrameElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLIFrameElement");
        var HTMLImageElement = generateClass(Reflect.BASE, {
            complete: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).complete;
                }
            ),
            currentSrc: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).currentSrc;
                }
            ),
            naturalHeight: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).naturalHeight;
                }
            ),
            naturalWidth: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).naturalWidth;
                }
            ),
        }, HTMLElement, "HTMLImageElement");
        var HTMLInputElement = generateClass(Reflect.BASE, {
            name: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).name;
                }
            ),
            value: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).value;
                }
            ),
            checked: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).checked;
                }
            ),
            selectionEnd: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).selectionEnd;
                }
            ),
            selectionStart: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).selectionStart;
                }
            ),
            files: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).files;
                }
            ),
            select: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).select();
                }
            ),
        }, HTMLElement, "HTMLInputElement");
        var HTMLLIElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLLIElement");
        var HTMLLabelElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLLabelElement");
        var HTMLLegendElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLLegendElement");
        var HTMLLinkElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLLinkElement");
        var HTMLMenuElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLMenuElement");
        var HTMLMetaElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLMetaElement");
        var HTMLMeterElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLMeterElement");
        var HTMLModElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLModElement");
        var HTMLOListElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLOListElement");
        var HTMLObjectElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLObjectElement");
        var HTMLOptGroupElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLOptGroupElement");
        var HTMLOptionElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLOptionElement");
        var HTMLOutputElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLOutputElement");
        var HTMLParagraphElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLParagraphElement");
        var HTMLParamElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLParamElement");
        var HTMLPictureElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLPictureElement");
        var HTMLPortalElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLPortalElement");
        var HTMLPreElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLPreElement");
        var HTMLProgressElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLProgressElement");
        var HTMLQuoteElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLQuoteElement");
        var HTMLScriptElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLScriptElement");
        var HTMLSelectElement = generateClass(Reflect.BASE, {
            name: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).name;
                }
            ),
            value: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).value;
                }
            ),
            selectedIndex: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).selectedIndex;
                }
            ),
        }, HTMLElement, "HTMLSelectElement");
        var HTMLSlotElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLSlotElement");
        var HTMLSourceElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLSourceElement");
        var HTMLSpanElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLSpanElement");
        var HTMLStyleElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLStyleElement");
        var HTMLTableCaptionElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableCaptionElement");
        var HTMLTableCellElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableCellElement");
        var HTMLTableColElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableColElement");
        var HTMLTableElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableElement");
        var HTMLTableRowElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableRowElement");
        var HTMLTableSectionElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTableSectionElement");
        var HTMLTemplateElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTemplateElement");
        var HTMLTextAreaElement = generateClass(Reflect.BASE, {
            name: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).name;
                }
            ),
            value: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).value;
                }
            ),
            selectionEnd: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).selectionEnd;
                }
            ),
            selectionStart: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).selectionStart;
                }
            ),
            select: generateMethodDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).select();
                }
            ),
        }, HTMLElement, "HTMLTextAreaElement");
        var HTMLTimeElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTimeElement");
        var HTMLTitleElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLTitleElement");
        var HTMLTrackElement = generateClass(Reflect.BASE, {
            readyState: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).readyState;
                }
            ),
        }, HTMLElement, "HTMLTrackElement");
        var HTMLUListElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLUListElement");
        var HTMLUnknownElement = generateClass(Reflect.BASE, {
        }, HTMLElement, "HTMLUnknownElement");
        var HTMLVideoElement = generateClass(Reflect.BASE, {
            videoHeight: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).videoHeight;
                }
            ),
            videoWidth: generateGetterDescriptor(
                /**
                 *
                 * @this {any}
                 */
                function () {
                    return real(this).videoWidth;
                }
            ),
        }, HTMLMediaElement, "HTMLVideoElement");
        var MathMLElement = generateClass(Reflect.BASE, {
        }, Element, "MathMLElement");
        var SVGElement = generateClass(Reflect.BASE, {
        }, Element, "SVGElement");
        /**
         * 
         */
        return {
            HTMLAnchorElement: HTMLAnchorElement,
            HTMLAreaElement: HTMLAreaElement,
            HTMLAudioElement: HTMLAudioElement,
            HTMLBRElement: HTMLBRElement,
            HTMLBaseElement: HTMLBaseElement,
            HTMLBodyElement: HTMLBodyElement,
            HTMLButtonElement: HTMLButtonElement,
            HTMLCanvasElement: HTMLCanvasElement,
            HTMLDListElement: HTMLDListElement,
            HTMLDataElement: HTMLDataElement,
            HTMLDataListElement: HTMLDataListElement,
            HTMLDetailsElement: HTMLDetailsElement,
            HTMLDialogElement: HTMLDialogElement,
            HTMLDivElement: HTMLDivElement,
            HTMLEmbedElement: HTMLEmbedElement,
            HTMLFieldSetElement: HTMLFieldSetElement,
            HTMLFormElement: HTMLFormElement,
            HTMLHRElement: HTMLHRElement,
            HTMLHeadElement: HTMLHeadElement,
            HTMLHeadingElement: HTMLHeadingElement,
            HTMLHtmlElement: HTMLHtmlElement,
            HTMLIFrameElement: HTMLIFrameElement,
            HTMLImageElement: HTMLImageElement,
            HTMLInputElement: HTMLInputElement,
            HTMLLIElement: HTMLLIElement,
            HTMLLabelElement: HTMLLabelElement,
            HTMLLegendElement: HTMLLegendElement,
            HTMLLinkElement: HTMLLinkElement,
            HTMLMenuElement: HTMLMenuElement,
            HTMLMetaElement: HTMLMetaElement,
            HTMLMeterElement: HTMLMeterElement,
            HTMLModElement: HTMLModElement,
            HTMLOListElement: HTMLOListElement,
            HTMLObjectElement: HTMLObjectElement,
            HTMLOptGroupElement: HTMLOptGroupElement,
            HTMLOptionElement: HTMLOptionElement,
            HTMLOutputElement: HTMLOutputElement,
            HTMLParagraphElement: HTMLParagraphElement,
            HTMLParamElement: HTMLParamElement,
            HTMLPictureElement: HTMLPictureElement,
            HTMLPortalElement: HTMLPortalElement,
            HTMLPreElement: HTMLPreElement,
            HTMLProgressElement: HTMLProgressElement,
            HTMLQuoteElement: HTMLQuoteElement,
            HTMLScriptElement: HTMLScriptElement,
            HTMLSelectElement: HTMLSelectElement,
            HTMLSlotElement: HTMLSlotElement,
            HTMLSourceElement: HTMLSourceElement,
            HTMLSpanElement: HTMLSpanElement,
            HTMLStyleElement: HTMLStyleElement,
            HTMLTableCaptionElement: HTMLTableCaptionElement,
            HTMLTableCellElement: HTMLTableCellElement,
            HTMLTableColElement: HTMLTableColElement,
            HTMLTableElement: HTMLTableElement,
            HTMLTableRowElement: HTMLTableRowElement,
            HTMLTableSectionElement: HTMLTableSectionElement,
            HTMLTemplateElement: HTMLTemplateElement,
            HTMLTextAreaElement: HTMLTextAreaElement,
            HTMLTimeElement: HTMLTimeElement,
            HTMLTitleElement: HTMLTitleElement,
            HTMLTrackElement: HTMLTrackElement,
            HTMLUListElement: HTMLUListElement,
            HTMLUnknownElement: HTMLUnknownElement,
            HTMLVideoElement: HTMLVideoElement,
            HTMLMediaElement: HTMLMediaElement,
            HTMLElement: HTMLElement,
            MathMLElement: MathMLElement,
            SVGElement: SVGElement,
            Document: Document,
            Element: Element,
            Node: Node,
            Window: Window,
            XMLHttpRequest: XMLHttpRequest,
            EventTarget: EventTarget,
        };
    }());
    return {
        detach: skrinkSerializer(detach),
        attach: skrinkSerializer(attach),
        replace: skrinkSerializer(replace),
        trigger: skrinkSerializer(trigger),
        destroy: skrinkSerializer(destroy),
        wrap: skrinkSerializer(wrap),
        real: skrinkSerializer(real),
        behaviours: behaviours,
        interfaces: interfaces,
    };
}());
