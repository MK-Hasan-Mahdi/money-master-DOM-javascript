// input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    if (isNaN(inputField.value) == true) {
        alert('pls give number')
    } else {
        const inputAmountValue = parseFloat(inputAmount);
        // clear expenses field area 
        inputField.value = '';
        return inputAmountValue;
    }

}

document.getElementById('calcu-btn').addEventListener
    ('click', function () {
        // cost calculation
        const foodCostValue = getInputValue('food-cost', false);
        const rentCostValue = getInputValue('rent-cost', false);
        const clothCostValue = getInputValue('cloth-cost', false);
        // total exp
        const totalExp = document.getElementById('total-exp');
        totalExp.innerText = foodCostValue + rentCostValue + clothCostValue;
        // income
        const incomeAmountValue = getInputValue('income-field', false)
        // balance after expenses
        const balanceTotal = document.getElementById('balance-after-exp');
        const balanceAmount = balanceTotal.innerText;
        balanceTotal.innerText = incomeAmountValue - totalExp.innerText;

    })

document.getElementById('save-btn').addEventListener
    ('click', function () {
        const incomeInputText = document.getElementById('income-field');
        let incomeAmount = parseFloat(incomeInputText.value);
        const savingInputText = document.getElementById('saving-percent');
        const savingAmount = parseFloat(savingInputText.value);
        let savingAmountTotal = (incomeAmount * savingAmount) / 100;
        let savingTotal = document.getElementById('saving-total');
        savingTotal.innerText = savingAmountTotal;

    })