const btn=document.getElementById("start");
btn.addEventListener("click", startStory) 

function startStory() {
    const storyText=document.getElementById("story");

    const animal = prompt("Enter an animal");
    const animalSound = prompt("Enter an animal sound");
    const question = prompt("Enter a question");

    let rodent = prompt("Do you like rats? Yes/No");
    while (!(rodent.toLowerCase() == "yes" || rodent.toLowerCase() == "no")) {
        alert("Not a valid answer");
        rodent = prompt("Are you scared of rats? Yes/No");
    }
    if (rodent.toLowerCase() == "yes") {
        rodent = "squirrel";
    } else {
        rodent = "rat";
    }

    let day = prompt("Enter a number from 1-31");
    while (!(parseInt(day) >= 1 && parseInt(day) <= 31 && !isNaN(day) && !day.includes("."))) {
        alert("Not a valid answer");
        day = prompt("Enter a number from 1-31");
    }

    let hour = prompt("Enter a number between 1-12");
    while (!(parseInt(hour) >= 1 && parseInt(hour) <= 12 && !isNaN(hour) && !hour.includes("."))) {
        alert("Not a valid answer");
        hour = prompt("Enter a number between 1-12");
    }
    const minute = parseInt(day) + parseInt(hour);



    storyText.textContent = `Once upon a time, there was a ${animal} who could talk. 
    However he never revealed this power to anyone. He'd say “${animalSound}” anytime someone asked him a question. 
    “Who’s a good boy!” “${animalSound}” he replied. “${question}” “${animalSound}” was his refutation. 
    He’d never utter a word about a tree or a ${rodent}. Then one day on the ${day}th day of July at ${hour}:${minute} he went up to his owner. 
    “Aw doggy want a treat?” “No one will believe you.” said the dog as he walked away. 
    `;
}