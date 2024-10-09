/*   Validate Inputs function*/

function validateInputs(principal, rate, time) {
    if (principal < 500 || principal > 10000) {
        alert('Principal amount must be between $500 and $10,000.');
        return false;
    }
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert('Please enter valid positive numbers for principal, rate, and time.');
        return false;
    }
    return true;
}

/*Apply bonus function*/

function applyBonusRate(rate, time) {
    let additionalInfo = "";
    if (time > 5) {
        rate += 2;
        additionalInfo = "An additional 2% bonus rate has been applied for a period exceeding 5 years.";
    }
    return { rate, additionalInfo };
}
//calculate interest
function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    // Validate inputs
    if (!validateInputs(principal, rate, time)) {
        return;
    }

    // Determine base rate 
    let baseRate;
    if (principal < 1000) {
        baseRate = 5;
    } else if (principal <= 5000) {
        baseRate = 5;
    } else {
        baseRate = 10;
    }

    // Apply bonus rate if applicable
    let { rate: finalRate, additionalInfo } = applyBonusRate(baseRate, time);
    finalRate += rate;

    // Calculate simple interest
    const interest = calculateSimpleInterest(principal, finalRate, time);
    const totalAmount = principal + interest;

    // Display results
    document.getElementById('interest').textContent = `Interest: $${interest.toFixed(2)}`;
    document.getElementById('total').textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById('additional-info').innerHTML = `
    <strong>Calculation Details:</strong><br>
     Principal: $${principal}<br>
     Base Rate: ${baseRate}%<br>
     User Rate: ${rate}%<br>
     Final Applied Rate: ${finalRate}%<br>
     Time: ${time} years<br>
    ${additionalInfo ? '<br>' + additionalInfo : ''}
`;
}