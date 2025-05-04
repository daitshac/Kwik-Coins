// script.js
const amountInput = document.getElementById("amount");
const amountValue = document.getElementById("amountValue");
const durationInput = document.getElementById("duration");
const interestOutput = document.getElementById("interest");
const totalOutput = document.getElementById("total");
const dueDateOutput = document.getElementById("dueDate");
const applyBtn = document.getElementById("applyBtn");
const finalApplyBtn = document.getElementById("finalApplyBtn");

const formUrl = "https://forms.zohopublic.com/virtualoffice19137/form/KwikMoni/formperma/KzYKxnPTC3G-Z3UsAH0MHwlX2PClPUTBs5zkbJX2Lyw";

function updateValues() {
  let amount = parseInt(amountInput.value);
  let duration = parseInt(durationInput.value);
  amountValue.textContent = `K${amount}`;

  let interestRate = 0;
  if (duration === 14) {
    interestRate = 0.3;
  } else if (duration === 28) {
    interestRate = 0.6;
  }

  let interest = Math.round(amount * interestRate);
  let total = amount + interest;

  interestOutput.textContent = `K${interest}`;
  totalOutput.textContent = `K${total}`;

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + duration);
  dueDateOutput.textContent = dueDate.toDateString();

  const applyLink = `${formUrl}?amount=${amount}&duration=${duration}&repay=${total}`;
  applyBtn.href = applyLink;
  finalApplyBtn.href = applyLink;
}

amountInput.addEventListener("input", updateValues);
durationInput.addEventListener("change", updateValues);

window.addEventListener("DOMContentLoaded", updateValues);
