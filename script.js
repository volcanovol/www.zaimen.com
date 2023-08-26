document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".number, .operator");
    const calculateButton = document.getElementById("calculate");
    const clearButton = document.getElementById("clear");
    const sqrtButton = document.getElementById("sqrt");
    const sinButton = document.getElementById("sin");
    const cosButton = document.getElementById("cos");
    const tanButton = document.getElementById("tan");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            display.value += button.value;
        });
    });

    calculateButton.addEventListener("click", function () {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    });

    clearButton.addEventListener("click", function () {
        display.value = "";
    });

    sqrtButton.addEventListener("click", function () {
        try {
            display.value = Math.sqrt(eval(display.value));
        } catch (error) {
            display.value = "Error";
        }
    });

    sinButton.addEventListener("click", function () {
        try {
            display.value = Math.sin(eval(display.value));
        } catch (error) {
            display.value = "Error";
        }
    });

    cosButton.addEventListener("click", function () {
        try {
            display.value = Math.cos(eval(display.value));
        } catch (error) {
            display.value = "Error";
        }
    });

    tanButton.addEventListener("click", function () {
        try {
            display.value = Math.tan(eval(display.value));
        } catch (error) {
            display.value = "Error";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // ... Your existing JavaScript code ...

    const goToQuizButton = document.getElementById("goToQuiz");

    goToQuizButton.addEventListener("click", function () {
        window.location.href = "quiz.html"; // Navigate to quiz.html
    });

    // ... Your existing JavaScript code ...
});
