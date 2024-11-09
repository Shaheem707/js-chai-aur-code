const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(...dc_heros);

const newHeroes = marvel_heros.concat(dc_heros);

// console.log(marvel_heros);
console.log(newHeroes);

console.log(Array.isArray("Shaheem")); // This is a question and will return false
console.log(Array.from("Shaheem")); // This will make an array as close as it can make
console.log(Array.from({name: "Shaheem"})); // Interesting case - It will return empty array, as it cannot convert

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3))
