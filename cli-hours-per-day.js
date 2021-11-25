const readLine = require('readline-sync');

module.exports = function cliHoursPerDay() {
  const daysOff = readLine.question('Escribe la cantidad de horas trabajadas por dia (8 por defecto) >> ');

  if (!daysOff) return 8;

  const number = Number(daysOff);

  if (Number.isNaN(number)) {
    console.log('Número incorrecto, por defecto serán 8 horas');
    
    return 8;
  }

  return number;
}