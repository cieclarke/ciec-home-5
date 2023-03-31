"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbums = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getAlbums = async () => {
    const res = await get('flickr.photosets.getList', {
        primary_photo_extras: 'url_m',
        user_id: '67828456@N07',
        api_key: '61777036f4ecf11adb192f7156c6e92e',
        per_page: 10,
        format: 'json',
        nojsoncallback: 1,
    });
    return mapResToAlbum(res);
};
exports.getAlbums = getAlbums;
const mapResToAlbum = (res) => res.photosets.photoset.map((p) => ({
    id: p.id,
    url: p.primary_photo_extras.url_m,
}));
const get = async (method, options) => {
    const params = Object.entries(options).reduce((prev, [key, value]) => {
        return `${prev}&${key}=${value}`;
    }, `method=${method}`);
    const res = await (0, node_fetch_1.default)(`https://api.flickr.com/services/rest?${params}`);
    return res.json();
};
//# sourceMappingURL=flickr.js.map