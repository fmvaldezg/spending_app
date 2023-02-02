const form = document.getElementById("spend-form");
const spendCategory = document.getElementById("spend-category");
const spendAmount = document.getElementById("spend-amount");
const spendData = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  spendData.push({
    category: spendCategory.value,
    amount: spendAmount.value,
  });
  localStorage.setItem("spendData", JSON.stringify(spendData));
});

const downloadReport = document.getElementById("download-report");
downloadReport.addEventListener("click", () => {
  // Code to convert JSON data to Excel format and download the report
});
