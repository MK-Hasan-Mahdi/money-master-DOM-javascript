// input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputField.value = '';
        return alert('Please give number format and dont give negative number')
    } else {
        const inputAmountValue = parseFloat(inputAmount);
        // clear expenses field area 
        inputField.value = '';
        return inputAmountValue;
    }
}

document.getElementById('calcu-btn').addEventListener
    ('click', function () {
        // income
        const incomeAmountValue = getInputValue('income-field', false);
        // cost calculation
        const foodCostValue = getInputValue('food-cost', false);
        const rentCostValue = getInputValue('rent-cost', false);
        const clothCostValue = getInputValue('cloth-cost', false);
        // total exp
        const totalExp = document.getElementById('total-exp');
        const totalExpenseAmount = foodCostValue + rentCostValue + clothCostValue;
        totalExp.innerText = totalExpenseAmount;


        // balance after expenses
        const balanceTotal = document.getElementById('balance-after-exp');
        balanceTotal.innerText = incomeAmountValue - totalExpenseAmount;

        const balanceAmount = parseFloat(balanceTotal.innerText);
        if (balanceAmount < 0) {
            alert('cant negative value');
        }
    })



document.getElementById('save-btn').addEventListener
    ('click', function () {
        const totalExp = document.getElementById('total-exp').innerText;
        const balanceAfterExp = document.getElementById('balance-after-exp').innerText;
        const incomeAmountValue = parseFloat(totalExp) + parseFloat(balanceAfterExp);
        let savingAmountValue = document.getElementById('saving-percent').value;
        let savingAmountTotal = (incomeAmountValue * savingAmountValue) / 100;
        // console.log(savingAmountTotal);
        let savingTotal = document.getElementById('saving-total');
        savingTotal.innerText = savingAmountTotal;

        // remaining balance
        let remainBalance = document.getElementById('balance-remaining');
        remainBalance.innerText = balanceAfterExp - savingAmountTotal;
    })