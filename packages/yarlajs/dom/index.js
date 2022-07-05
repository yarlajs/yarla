import _getComputedStyle from "./lib/getComputedStyle/index.js";
import _requestFullscreen from "./lib/requestFullscreen/index.js";
import _exitFullscreen from "./lib/exitFullscreen/index.js";
import _scrollTo from "./lib/scrollTo/index.js";
import _history from "./lib/history/index.js";
import _render from "./lib/render/index.js";
import _Router from "./lib/Router/index.js";

export {
    _getComputedStyle as getComputedStyle,
    _requestFullscreen as requestFullscreen,
    _exitFullscreen as exitFullscreen,
    _scrollTo as scrollTo,
    _history as history,
    _render as render,
    _Router as Router,
}

export default {
    getComputedStyle: _getComputedStyle,
    requestFullscreen: _requestFullscreen,
    exitFullscreen: _exitFullscreen,
    scrollTo: _scrollTo,
    history: _history,
    render: _render,
    Router: _Router,
};
