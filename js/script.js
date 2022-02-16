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
        const foodCostValue = getInputValue('food-cost');
        const rentCostValue = getInputValue('rent-cost');
        const clothCostValue = getInputValue('cloth-cost');

        const totalExp = document.getElementById('total-exp');
        totalExp.innerText = foodCostValue + rentCostValue + clothCostValue;


        const incomeInput = document.getElementById('income-field');
        const incomeAmount = incomeInput.value;
        const balanceInput = document.getElementById('balance-after-exp');
        const balanceAmount = balanceInput.innerText;
        balanceInput.innerText = incomeAmount - totalExp.innerText;
    })