function curriedAdd(total = 0) {
	return function add(num) {
		if (num === undefined) return total;
		return curriedAdd(total + num);
	};
}

module.exports = curriedAdd;
