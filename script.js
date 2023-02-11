// Define variables
const expenseForm = document.querySelector("#expense-form");
const expenseName = document.querySelector("#expense-name");
const expenseAmount = document.querySelector("#expense-amount");
const expenseList = document.querySelector("#expense-list");
const clearExpenses = document.querySelector("#clear-expenses");
const totalExpenses = document.querySelector("#total-expenses");

let expenses = [];

// Retrieve expenses from local storage
if (localStorage.getItem("expenses")) {
  expenses = JSON.parse(localStorage.getItem("expenses"));
  displayExpenses();
}

// Add expense to the list and local storage
expenseForm.addEventListener("submit", addExpense);
function addExpense(event) {
  event.preventDefault();
  if (expenseName.value.trim() === "" || expenseAmount.value.trim() === "") {
    Swal.fire("Error", "Please enter a valid name and amount", "error");
  } else {
    const expense = {
      id: Date.now(),
      name: expenseName.value.trim(),
      amount: parseInt(expenseAmount.value.trim())
    };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
    expenseName.value = "";
    expenseAmount.value = "";
  }
}

// Display expenses on the screen
function displayExpenses() {
  expenseList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column">
          <span>${expense.name}</span>
          <small class="text-muted">${formatDate(expense.id)}</small>
        </div>
        <div>
          <span class="badge badge-primary badge-pill mr-3">$${expense.amount}</span>
          <button type="button" class="btn btn-secondary btn-sm btn-edit" data-id="${expense.id}">Edit</button>
          <button type="button" class="btn btn-danger btn-sm" data-id="${expense.id}">Delete</button>
        </div>
      </div>
    `;
    expenseList.appendChild(li);
    total += expense.amount;
  }
  totalExpenses.innerHTML = `
    <hr>
    <h4 class="m-0">Total: $${total}</h4>
  `;
}

// Clear all expenses from the list and local storage
clearExpenses.addEventListener("click", function() {
  expenses = [];
  localStorage.removeItem("expenses");
  displayExpenses();
});

// Format date as YYYY-MM-DD
function formatDate(date) {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
}
// Edit an expense from the list and local storage
expenseList.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-edit")) {
    const id = event.target.getAttribute("data-id");
    const expense = expenses.find(expense => expense.id == id);
    if (expense) {
      Swal.fire({
        title: "Edit Expense",
        html: `
          <label for="edit-name">Name</label>
          <input
            type="text"
            id="edit-name"
            class="swal2-input"
            value="${expense.name}"
            required
          />
          <label for="edit-amount">Amount</label>
          <input
            type="number"
            id="edit-amount"
            class="swal2-input"
            value="${expense.amount}"
            required
          />
        `,
        confirmButtonText: "Save",
        preConfirm: () => {
          const editName = document.getElementById("edit-name").value;
          const editAmount = document.getElementById("edit-amount").value;
          if (editName.trim() === "" || editAmount.trim() === "") {
            Swal.showValidationMessage("Please enter a valid name and amount");
          } else {
            expense.name = editName.trim();
            expense.amount = parseInt(editAmount.trim());
            localStorage.setItem("expenses", JSON.stringify(expenses));
            displayExpenses();
          }
        }
      });
    }
  }
});

  

