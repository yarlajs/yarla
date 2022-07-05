import env from "../env/index.js";

export default env.DEVELOPMENT ? [
    "assets",
    "locale",
    "public",
    "static",
] : [];
