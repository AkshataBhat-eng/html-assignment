const celsiusTemps = [0, 10, 20, 30, 40];

function averageTemp() {
    const fahrenheitTemps = celsiusTemps.map(c => (c * 9/5) + 32);
    const validTemps = fahrenheitTemps.filter(f => f < 120); 
    const sum = validTemps.reduce((acc, temp) => acc + temp, 0);
    const average = validTemps.length > 0 ? sum / validTemps.length : 0;
}

console.log("Average Temperature in Fahrenheit:", averageTemp(celsiusTemps));
