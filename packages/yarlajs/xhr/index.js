import _defaults from "./lib/defaults/index.js";
import _resolve from "./lib/resolve/index.js";
import _import from "./lib/import/index.js";
import _delete from "./lib/delete/index.js";
import _patch from "./lib/patch/index.js";
import _post from "./lib/post/index.js";
import _get from "./lib/get/index.js";
import _put from "./lib/put/index.js";
import _xhr from "./lib/xhr/index.js";

export {
    _defaults as defaults,
    _resolve as resolve,
    _import as import,
    _delete as delete,
    _patch as patch,
    _post as post,
    _get as get,
    _put as put,
}

export default _xhr;
