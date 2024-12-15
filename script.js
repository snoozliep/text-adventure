const story = [
    {
        text: "You wake up in a dark forest. There are two paths ahead of you.",
        options: [
            { text: "Take the left path", next: 1 },
            { text: "Take the right path", next: 2 }
        ]
    },
    {
        text: "You encounter a wild bear! What do you do?",
        options: [
            { text: "Run away", next: 3 },
            { text: "Try to fight the bear", next: 4 }
        ]
    },
    {
        text: "You find a sparkling river. Do you want to drink from it?",
        options: [
            { text: "Yes", next: 5 },
            { text: "No, keep walking", next: 6 }
        ]
    },
    {
        text: "You successfully escaped the bear and find a safe spot to rest. You win!",
        options: []
    },
    {
        text: "The bear is too strong. You lose!",
        options: []
    },
    {
        text: "The water is refreshing! You feel energized. You win!",
        options: []
    },
    {
        text: "You walk for hours and find nothing. You lose!",
        options: []
    }
];

let currentStory = 0;

function loadStory() {
    const current = story[currentStory];
    document.getElementById("story").textContent = current.text;
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");

    if (current.options.length > 0) {
        option1.textContent = current.options[0].text;
        option1.onclick = () => {
            currentStory = current.options[0].next;
            loadStory();
        };
        option2.textContent = current.options[1].text;
        option2.onclick = () => {
            currentStory = current.options[1].next;
            loadStory();
        };
    } else {
        option1.style.display = "none";
        option2.style.display = "none";
        document.getElementById("result").textContent = "Game Over!";
    }
}

loadStory();
