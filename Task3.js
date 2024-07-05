let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Escape') {
        handleInput('C');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    }
});

function handleInput(input) {
    if (input == "=") {
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
        document.querySelector("input").value = string;
    } else if (input == "C") {
        string = "";
        document.querySelector("input").value = string;
    } else if (input == "DEL") {
        string = string.slice(0, -1);
        document.querySelector("input").value = string;
    } else {
        string = string + input;
        document.querySelector("input").value = string;
    }
}

