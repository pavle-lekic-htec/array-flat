import assert from 'assert';
import {describe, it} from 'mocha';
import {flatArray, flatArrayRecursive} from '../index';

const arrayFlat = flatArray; // flatArrayRecursive

describe('arrayFlat()', () => {
	it('should throw if argument #1 is not array', () => {
		assert.throws(() => arrayFlat(14), Error);
	});
	it('[[1,2,[3]],4] -> [1,2,3,4]', () => {
		assert.deepEqual(arrayFlat([[1,2,[3]],4]), [1,2,3,4]);
	});
	it('[7, [5, [3, [2, 5, [5, 5]], 9], 3, 4], 2, [3, 4]] -> [7, 5, 3, 2, 5, 5, 5, 9, 3, 4, 2, 3, 4]', () => {
		assert.deepEqual(arrayFlat([7, [5, [3, [2, 5, [5, 5]], 9], 3, 4], 2, [3, 4]]), [7, 5, 3, 2, 5, 5, 5, 9, 3, 4, 2, 3, 4]);
	});
	it('[] -> []', () => {
		assert.deepEqual(arrayFlat([]), []);
	});
	it('[[[]]] -> []', () => {
		assert.deepEqual(arrayFlat([[[]]]), []);
	});
});
