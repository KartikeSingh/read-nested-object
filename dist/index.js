"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getObjectProperty(object, key) {
    if (!key || typeof (key) !== "string")
        throw new Error("Key should be a non empty string.");
    if (key.includes("images"))
        console.log(object, key);
    if (!object || typeof (object) !== 'object')
        return undefined;
    object = JSON.parse(JSON.stringify(object));
    const keys = key.split(".");
    let value = undefined;
    keys.reduce((a, b, i) => {
        if (i === keys.length - 1)
            value = a ? a[b] : undefined;
        else
            return a ? a[b] : {};
    }, object);
    return value;
}
exports.default = getObjectProperty;
