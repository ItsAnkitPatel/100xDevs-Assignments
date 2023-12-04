/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // First way
  /* if (transactions.length > 0) {
    const categoryItem = [];
    const prices = [];
    for (let i = 0; i < transactions.length; i++) {
      if (!categoryItem.includes(transactions[i].category)) {
        const newCategory = transactions[i].category;
        categoryItem.push(transactions[i].category);
        let price = 0;

        for (let j = 0; j < transactions.length; j++) {
          if (transactions[j].category === newCategory) {
            price += transactions[j].price;
          }
        }
        prices.push(price);
      }
    }
    const ans = [];
    for (let i = 0; i < categoryItem.length; i++) {
      ans.push({ category: categoryItem[i], totalSpent: prices[i] });
    }
    return ans;
  }
  return []; */

  // Second way
  if (transactions.length > 0) {
    const result = [];

    transactions.forEach((transaction) => {
      const existingCategory = result.find((item) => item.category === transaction.category);
  
      if (!existingCategory) {
        const totalSpent = transactions
          .filter((item) => item.category === transaction.category)
          .reduce((sum, item) => sum + item.price, 0);
  
        result.push({ category: transaction.category, totalSpent});
      }
    });
    return result;
  }
  return [];
}
module.exports = calculateTotalSpentByCategory;

