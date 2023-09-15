import { Op } from 'sequelize';
import { Animal, Human } from './model.js';

// Get the human with the primary key 2
export const query1 = (Human) => {
    return {
        humanId: 2,
        fname,
        lname,
        email,
    }
}
console.log(query1(Human))
`SELECT *
FROM humans 
WHERE human_id = 2;`

// Get the first animal whose species is "fish"
export const query2 = 
`SELECT *
FROM animals 
WHERE species = 'fist' LIMIT 1;`

// Get all animals belonging to the human with primary key 5
export const query3 = 
`SELECT *
FROM animals 
WHERE human_id = 5;`

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = 
`SELECT *
FROM animals
WHERE birth_year > 2015:`

// Get all the humans with first names that start with "J"
export const query5 = 
`SELECT *
FROM humans
WHERE fname LIKE 'J%';`

// Get all the animals who don't have a birth year
export const query6 = 
`SELECT *
FROM animals
WHERE birth_year IS NULL;`

// Get all the animals with species "fish" OR "rabbit"
export const query7 = 
`SELECT *
FROM animals
WHERE species IN ('fish', 'rabbit', );`

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = 
`SELECT *
FROM humans 
WHERE email NOT LIKE '%gmail%';`

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {}

// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {}
