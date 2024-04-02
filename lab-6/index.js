
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempType = document.getElementById('tempType').value;
    let convertedTemp;

    if (tempType === 'celsius') {
        convertedTemp = tempInput * 0.621371; // Convert to Fahrenheit
    } else {
        convertedTemp = tempInput * 1.60934; // Convert to Celsius
    }

    document.getElementById('convertedTemp').innerText = `Converted Value: ${convertedTemp.toFixed(2)}`;
}
