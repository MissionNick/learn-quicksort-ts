"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quickSortStr_1 = require("../quickSortStr");
describe('Quick sort tests', () => {
    it('Includes duplicate strings', () => {
        const sortThis = ["Sony X", "Samsung Y", "Sony X", "Dell XX2"];
        const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
        expect((0, quickSortStr_1.default)(sortThis)).toStrictEqual(sorted);
    });
    it('Only 1 ', () => {
        const sortThis = ["Sony X"];
        const sorted = ["Sony X"];
        expect((0, quickSortStr_1.default)(sortThis)).toStrictEqual(sorted);
    });
    it('Already in order', () => {
        const sortThis = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
        const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
        expect((0, quickSortStr_1.default)(sortThis)).toStrictEqual(sorted);
    });
    it('All on the left', () => {
        const sortThis = ["Sony X", "Samsung Y", "Sony X", "Dell XX2"];
        const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
        expect((0, quickSortStr_1.default)(sortThis)).toStrictEqual(sorted);
    });
    it('All on the right', () => {
        const sortThis = ["Dell XX2", "Sony X", "Samsung Y", "Sony X"];
        const sorted = ["Dell XX2", "Samsung Y", "Sony X", "Sony X"];
        expect((0, quickSortStr_1.default)(sortThis)).toStrictEqual(sorted);
    });
});
//# sourceMappingURL=quickSortStr.test.js.map