// array of expenses aka a list of items and what they cost
const expenses = [
    { description: 'Coffee', amount: 4.99},
    { description: 'Pizza', amount: 15.99}
];

// this decides which item belongs in what category
function categorizeExpense(amount) {
  if (typeof amount !== "number" || amount === null) {
    return "Invalid";
  }
  return amount <= 10 ? "Low" : "High";
}

// a function that goes through each item and adds the total
const calculateTotal = function(expensesArray) {
    let total = 0;
    for (let expense of expensesArray) {
        total += expense.amount;
    }
    return total;
};

// main function that runs the program
const showBudget = () => {
    console.log("=== My Budget===");
    for (let expense of expenses) {
        const category = categorizeExpense(expense.amount);
        console.log(`Item: ${expense.description}, Cost: $${expense.amount}, Category: ${category}`);
    }
    const total = calculateTotal(expenses);
    console.log(`Total Spent: $${Math.round(total * 100) / 100}`);
};


showBudget();
