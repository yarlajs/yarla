import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";
import imul from "../../module/standard/imul/index.js";
import rotl from "../../module/standard/rotl/index.js";

export default skrinkSerializer(
    /**
     * 
     * MurmurHash3.
     * 
     * @param {string} argc A utf8 string.
     * @param {number} [seed] Seed of hash.
     * @returns {number}
     */
    function (
        argc,
        seed
    ) {
        var l = argc.length;
        var m = l % 4;
        var n = l - m;
        var c1 = 0xCC9E2D51;
        var c2 = 0x1B873593;
        var h1 = seed || 0;
        var k1 = 0;
        for (var
            i = 0;
            i < n;
        ) {
            var e1 = (argc.charCodeAt(i++) & 0xFF);
            var e2 = (argc.charCodeAt(i++) & 0xFF) << 8;
            var e3 = (argc.charCodeAt(i++) & 0xFF) << 16;
            var e4 = (argc.charCodeAt(i++) & 0xFF) << 24;
            k1 = e1 | e2 | e3 | e4;
            k1 = imul(k1, c1);
            k1 = rotl(k1, 15);
            k1 = imul(k1, c2);

            h1 ^= k1;
            h1 = rotl(h1, 13);
            h1 = imul(h1, 5) + 0xE6546B64;
        }
        k1 = 0;
        switch (m) {
            case 3:
                k1 ^= (argc.charCodeAt(i + 2) & 0xFF) << 16;
            case 2:
                k1 ^= (argc.charCodeAt(i + 1) & 0xFF) << 8;
            case 1:
                k1 ^= (argc.charCodeAt(i) & 0xFF);
                k1 = imul(k1, c1);
                k1 = rotl(k1, 15);
                k1 = imul(k1, c2);
                h1 ^= k1;
        }
        h1 ^= l;
        h1 ^= h1 >>> 16;
        h1 = imul(h1, 0x85EBCA6B);
        h1 ^= h1 >>> 13;
        h1 = imul(h1, 0xC2B2AE35);
        h1 ^= h1 >>> 16;
        return h1 >>> 0;
    }
);
