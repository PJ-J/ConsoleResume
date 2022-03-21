let text: string = "PJ Jones";
let capName: string = text.toUpperCase();
console.log("Name: " + capName);

console.log("Career: Web Developer");
console.log("Description: Looking for work in Web Development");

console.log("My Interests:");
console.log("* Drumming");
console.log("* Meditating");
console.log("* Gardening");
console.log("* Playing Tetris");

let displayPosition = (company: string, title: string, description: string) => {
  console.log(`* ${title} at ${company} - ${description}.`);
};

console.log("My Previous Experience:");
displayPosition(
  "Trattoria Zaza",
  "General Manager",
  "Ran many aspects of the restaurant"
);
displayPosition(
  "Uber",
  "Driver",
  "Drove passengers to destination while ensuring safety"
);
displayPosition(
  "Henderson & Walton",
  "Billing associate",
  "Entered patient billing information"
);

console.log("My Skills:");

let displaySkill = (skill: string, cool: boolean) => {
  if (cool) {
    console.log(`* BAM: ${skill}`);
  } else {
    console.log(`* ${skill}`);
  }
};
displaySkill('Drumming', true);
displaySkill('Programming', true);
displaySkill('Tetris', false);
displaySkill('Composting', false);
displaySkill('Drawing', true);
