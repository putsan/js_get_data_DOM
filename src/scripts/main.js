'use strict';

const populationOfCountries = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const parsedPopulations = [ ...populationOfCountries ]
  .map(populationOfCountry => (
    +populationOfCountry.textContent.split(',').join('')
  ));
const totalPopulation = parsedPopulations
  .reduce((acc, populationOfCountry) => (
    acc + populationOfCountry
  ), 0);
const averagePopulation = totalPopulation / parsedPopulations.length;

total.textContent = totalPopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

average.textContent = averagePopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
