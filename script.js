document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const temperatureInput = document.getElementById('temperature');
    const conversionType = document.getElementById('conversionType');
    const resultElement = document.getElementById('result');

    // Function to convert temperature
    const convertTemperature = () => {
        const value = parseFloat(temperatureInput.value);
        
        // Check if input is empty or not a number
        if (isNaN(value)) {
            resultElement.innerHTML = '<p>Please enter a valid number</p>';
            return;
        }

        let result, unit;
        
        // Perform conversion based on selected type
        if (conversionType.value === 'celsiusToFahrenheit') {
            result = (value * 9/5) + 32;
            unit = '°F';
        } else {
            result = (value - 32) * 5/9;
            unit = '°C';
        }

        // Display result with 2 decimal places
        resultElement.innerHTML = `
            <p>${value} ${conversionType.value === 'celsiusToFahrenheit' ? '°C' : '°F'} = 
            <span class="highlight">${result.toFixed(2)} ${unit}</span></p>
        `;
    };

    // Event listeners for input and select changes
    temperatureInput.addEventListener('input', convertTemperature);
    conversionType.addEventListener('change', () => {
        // Only convert if there's a value in the input
        if (temperatureInput.value.trim() !== '') {
            convertTemperature();
        } else {
            resultElement.innerHTML = '<p>Result will appear here</p>';
        }
    });

    // Initial focus on input
    temperatureInput.focus();
});
