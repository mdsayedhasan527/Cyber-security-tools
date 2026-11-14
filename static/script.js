
const message = "Initializing Cyber Lab... SYSTEM ONLINE.";
let index = 0;

function typeText() {
    const output = document.getElementById("typing");

    if (index < message.length) {
        output.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, 70);
    }
}

typeText();
