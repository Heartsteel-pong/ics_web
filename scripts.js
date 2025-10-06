let accountBalance = 1000;
let cashBalance = 1000;
let count = 1;
let logText = `1, Current account balance: 1000, Current cash balance: 1000\n`;

function updateOutput() {
  document.getElementById("output").value = logText;
}

function updateBalance() {
  accountBalance = parseFloat(document.getElementById("accountBalance").value);
  cashBalance = parseFloat(document.getElementById("cashBalance").value);
  count++;
  logText += `${count}, Balances updated — Account: ${accountBalance}, Cash: ${cashBalance}\n`;
  updateOutput();
}

function proceed() {
  const operation = document.getElementById("operation").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    count++;
    logText += `${count}, Please enter a valid amount.\n`;
    updateOutput();
    return;
  }

  if (operation === "deposit") {
    if (cashBalance < amount) {
      count++;
      logText += `${count}, Not enough cash to deposit!\n`;
    } else {
      cashBalance -= amount;
      accountBalance += amount;
      count++;
      logText += `${count}, Deposited ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}\n`;
    }
  } else if (operation === "withdraw") {
    if (accountBalance < amount) {
      count++;
      logText += `${count}, Not enough account balance!\n`;
    } else {
      accountBalance -= amount;
      cashBalance += amount;
      count++;
      logText += `${count}, Withdrew ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}\n`;
    }
  }

  document.getElementById("accountBalance").value = accountBalance;
  document.getElementById("cashBalance").value = cashBalance;
  document.getElementById("amount").value = "";
  updateOutput();
}
