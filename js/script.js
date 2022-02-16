document.getElementById('calcu-button').addEventListener
    ('click', function () {
        const foodInput = document.getElementById('food-cost');
        const foodCost = foodInput.value;
        const rentInput = document.getElementById('rent-cost');
        const rentCost = rentInput.value;
        const clothInput = document.getElementById('cloth-cost');
        const clothCost = clothInput.value;
        const totalExp = document.getElementById('total-exp');
        totalExp.innerText = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothInput.value);
        const incomeInput = document.getElementById('income-field');
        const incomeAmount = incomeInput.value;
    })