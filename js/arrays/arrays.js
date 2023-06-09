const hobbies = ["Watching Netflix","Listening to music", "Reading books"];
console.log(hobbies[0]);

const firstHobby = hobbies.shift();

const arrayLength = hobbies.length;

hobbies.push("Hiking");
console.log(hobbies[hobbies.length - 1]);


console.log(`My hobbies are: ${hobbies.join(", ")}`);


const groceryItems = ["apple", "pear", "papaya", "mango"];

console.log(groceryItems.join("|"));