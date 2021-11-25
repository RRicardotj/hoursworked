#!/usr/bin/env node
const getWorkedHours = require('./getWorkedHours');
const cliDaysWorked = require('./cli-days-worked');
const cliHoursWorked = require('./cli-hours-per-day');

const daysOff = cliDaysWorked();

console.log('··········································', '\n');

const hours = cliHoursWorked();

const totalHours = getWorkedHours(daysOff, hours);

console.log(`Este mes has trabajado: ${totalHours} horas`);
