// All validation checks are performed here

export const validateWalletAddress = (walletAddress) => {
  if (!walletAddress.trim()) {
    throw new Error("Wallet address cannot be empty");
  }
  return true;
};

export const validateAmount = (amount) => {
  const amountValue = parseFloat(amount);

  if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
    throw new Error(
      "Invalid amount. Please enter a number between 0 and 10,000."
    );
  }

  return true;
};
