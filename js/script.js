// input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const inputAmountValue = parseFloat(inputAmount);
    // clear expenses field area 
    inputField.value = '';
    return inputAmountValue;
}

document.getElementById('calcu-button').addEventListener
    ('click', function () {
        // cost calculation
        const foodCostValue = getInputValue('food-cost');
        const rentCostValue = getInputValue('rent-cost');
        const clothCostValue = getInputValue('cloth-cost');
        // total exp
        const totalExp = document.getElementById('total-exp');
        totalExp.innerText = foodCostValue + rentCostValue + clothCostValue;
        // income
        const incomeAmountValue = getInputValue('income-field')
        // balance after expenses
        const balanceTotal = document.getElementById('balance-after-exp');
        const balanceAmount = balanceTotal.innerText;
        balanceTotal.innerText = incomeAmountValue - totalExp.innerText;
    })