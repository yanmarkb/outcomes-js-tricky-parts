function createAccount(pin, initialDeposit = 0) {
	let currentBalance = initialDeposit;
	let currentPin = pin;

	return {
		checkBalance(inputPin) {
			if (inputPin !== currentPin) return "Invalid PIN.";
			return `$${currentBalance}`;
		},
		deposit(inputPin, amount) {
			if (inputPin !== currentPin) return "Invalid PIN.";
			currentBalance += amount;
			return `Successfully deposited $${amount}. Current balance: $${currentBalance}.`;
		},
		withdraw(inputPin, amount) {
			if (inputPin !== currentPin) return "Invalid PIN.";
			if (amount > currentBalance)
				return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			currentBalance -= amount;
			return `Successfully withdrew $${amount}. Current balance: $${currentBalance}.`;
		},
		changePin(oldPin, newPin) {
			if (oldPin !== currentPin) return "Invalid PIN.";
			currentPin = newPin;
			return "PIN successfully changed!";
		},
	};
}

module.exports = { createAccount };
