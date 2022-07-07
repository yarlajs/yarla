/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default _;

declare const _: Message;

declare interface Message {
    readonly INVALID_URL: "Invalid URL";
    readonly INVALID_MODULE: "Invalid module";
    readonly INVALID_PROTOCOL: "Invalid protocol";
    readonly INVALID_FORMATTER: "Invalid formatter";
    readonly INVALID_RESULT_DATA: "Invalid result data";
    readonly ILLEGAL_INVOCATION: "Illegal invocation";
    readonly ILLEGAL_CONSTRUCTOR: "Illegal constructor";
    readonly TARGET_MUST_BE_AN_ARRAY: "Target must be an array";
    readonly TARGET_MUST_BE_AN_OBJECT: "Target must be an object";
    readonly ONLY_ASYNC_IS_SUPPORTED: "Only async is supported";
    readonly ONLY_USED_IN_COMPONENTS: "Only used in components";
    readonly ONLY_NUMBERS_COULD_INSIDE_SQUARE: "Only numbers could inside []";
    readonly ONLY_BE_CALLED_WHEN_STATE_IS_OPEN: "Only be called when state is OPEN",
    readonly ONLY_BE_CALLED_WHEN_STATE_IS_UNSENT: "Only be called when state is UNSENT";
    readonly CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_ASCII: "Character is outside the bounds of ascii";
    readonly CHARACTER_IS_OUTSIDE_THE_BOUNDS_OF_LATIN1: "Character is outside the bounds of latin1";
    readonly SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES: "Self-closing elements cannot contain child nodes";
    readonly FAILED_TO_EXECUTE_REMOVE: "The node to be removed is not a child of this node";
    readonly FAILED_TO_EXECUTE_INSERT: "The node before which the new node is to be inserted is not a child of this node";
    readonly FAILED_TO_CONSTRUCT_INSPANCE: "Please use the 'new' operator, this constructor cannot be called as a function";
    readonly PROMISE_RESOLVED_WITH_ITSELF: "Promise resolved with itself";
    readonly OFFSET_IS_OUTSIDE_THE_BOUNDS: "Offset is outside the bounds";
    readonly STREAM_CLOSED_BEFORE_ENDING: "Stream closed before ending";
    readonly EXPRESSION_CAN_NOT_BE_EMPTY: "Expression can not be empty";
    readonly MUST_HAVE_NUMBER_IN_SQUARE: "Must have number in []";
    readonly REDIRECT_EXCEEDS_MAXIMUM: "Redirect exceeds maximum";
    readonly NOT_IMPLEMENTED: "Not implemented";
    readonly NOT_SUPPORTED: "Not supported";
    readonly TIMEOUT: "Timeout";
    readonly ABORT: "Abort";
}
