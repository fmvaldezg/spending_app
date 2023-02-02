function addExpense() {
    var category = $('#category').val();
    var amount = $('#amount').val();
    
    expenses.push({ category: category, amount: amount });
    
    // code to update the expenses table
  }

  function downloadReport() {
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Category,Amount\n";
    
    expenses.forEach(function(expense) {
      csvContent += expense.category + "," + expense.amount + "\n";
    });
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "expenses.csv");
    link.click();
  }