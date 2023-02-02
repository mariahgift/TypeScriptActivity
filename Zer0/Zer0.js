"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function endZeros(a) {
    let numStr = a.toString();
    let splitted = numStr.split("");
    let count = 0;
    for (let index = 0; index < splitted.length; index++) {
        if (splitted[index] == "0") {
            count += 1;
        }
    }
    return count;
}
console.log(endZeros(1));
console.log(endZeros(0));
console.log(endZeros(10));
console.log(endZeros(100));
console.log(endZeros(1000));
//These "asserts" are used for self-checking
assert_1.default.strictEqual(endZeros(1), 0);
assert_1.default.strictEqual(endZeros(0), 1);
assert_1.default.strictEqual(endZeros(10), 1);
assert_1.default.strictEqual(endZeros(100), 2);
assert_1.default.strictEqual(endZeros(1000), 3);
