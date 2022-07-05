import message from "../../module/constant/message/index.js";
import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import separate from "../../module/standard/separate/index.js";
import flat from "../flat/index.js";

export default (function () {
    return skrinkSerializer(
        function () {
            var protocol = "";
            var host = "";
            var pathname = "";
            var search = "";
            var hash = "";
            var hasRoot = false;
            var once = true;
            for (var
                s = flat(arguments, 0, Infinity, true),
                l = s.length - 1,
                i = l;
                i >= -1;
                i--
            ) {
                var url;
                if (i >= 0) {
                    url = String(s[i]);
                } else {
                    url = "/";
                }
                if (url.length === 0) {
                    continue;
                }
                var loc = parse(url);
                if (once) {
                    search = loc.search;
                    hash = loc.hash;
                    once = false;
                }
                protocol = loc.protocol;
                host = loc.host;
                if (!hasRoot) {
                    pathname = loc.pathname + "/" + pathname;
                }
                if (!protocol) {
                    hasRoot = hasRoot || url.charAt(0) === "/";
                } else {
                    hasRoot = true;
                    break;
                }
            }
            if (!protocol) {
                throw new Error(message.INVALID_URL);
            }
            pathname = "/" + separate(pathname).join("/");
            return protocol + "//" + host + pathname + search + hash;
        }
    );
    /**
     * 
     * @param {string} url 
     */
    function parse(
        url
    ) {
        var match;
        var index = -1;
        var protocol = "";
        var host = "";
        var pathname = "";
        var search = "";
        var hash = "";
        if ((index = url.indexOf("#")) >= 0) {
            hash = url.slice(index);
            url = url.slice(0, index);
        }
        if ((index = url.indexOf("?")) >= 0) {
            search = url.slice(index);
            url = url.slice(0, index);
        }
        if ((match = url.match(/^([A-Za-z]+:)?\/\/([^/]*)/))) {
            protocol = match[1] || "";
            host = match[2] || "";
            pathname = url.slice(match[0].length) || "/";
        } else {
            pathname = url;
        }
        if (protocol) {
            pathname = "/" + separate(pathname).join("/");
        } else {
            pathname = separate(pathname, true).join("/");
        }
        return {
            protocol: protocol,
            host: host,
            pathname: pathname,
            search: search,
            hash: hash,
        };
    }
}());
