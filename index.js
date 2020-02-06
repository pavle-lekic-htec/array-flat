
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
	const state = [{arr, index: 0}];
	let currentPosition;
	let currentItem;

	while (state.length > 0) {
		currentPosition = state[state.length - 1];
		currentItem = currentPosition.arr[currentPosition.index];
		if (currentPosition.index === currentPosition.arr.length - 1 || currentPosition.arr.length === 0) { // last element
			state.pop();
		} else {
			currentPosition.index++;
		}
		if (Array.isArray(currentItem)) {
			if (currentItem.length > 0)
				state.push({arr: currentItem, index: 0});
		} else {
			resultingArray.push(currentItem);
		}
	}
	return resultingArray;
}
