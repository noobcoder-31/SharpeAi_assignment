// will fetch data from particular url here

export const postTransactionData = async (data) => {
  alert("Transaction Successfully Done!!");
};

export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
