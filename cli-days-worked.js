const readLine = require('readline-sync');

module.exports = function cliDaysWorked() {
  const daysOff = readLine.question('Escribe los dias fuera de la oficina este mes >> ');

  const number = Number(daysOff);

  if (Number.isNaN(number)) {
    throw new Error('Debes introducir un número para que el cálculo sea correcto');
  }

  return number;
}