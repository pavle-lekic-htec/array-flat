
export const flatArrayRecursive = (arr, resultingArr = []) => {
	arr.forEach((item) => {
		if (Array.isArray(item)) {
			flatArr(item, resultingArr);
		} else {
			resultingArr.push(item);
	 	}
	});
	return resultingArr;
}

export const flatArray = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error(`Expected argument #1 to be array but got ${typeof arr} instead.`);
	} else if (arr.length === 0) {
		return [];
	}

	const resultingArray = [];
	const arrStack = [arr];
	const indexStack = [0];
	let currentItem;
	let currentArr;
	let currentIndex;

	while (arrStack.length > 0) {
		currentArr = arrStack[arrStack.length - 1];
		currentIndex = indexStack[indexStack.length - 1];

		if (currentIndex === currentArr.length - 1 || currentArr.length === 0) { // last element
			indexStack.pop();
			arrStack.pop();
		} else {
			indexStack[indexStack.length - 1]++;
		}

		currentItem = currentArr[currentIndex];
		if (Array.isArray(currentItem)) {
			if (currentItem.length > 0)
				arrStack.push(currentItem);
				indexStack.push(0);
		} else {
			resultingArray.push(currentItem);
		}
	}

	return resultingArray;
}
