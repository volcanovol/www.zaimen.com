document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const submitButton = document.getElementById("submit");
    const resultElement = document.getElementById("result");

    let correctAnswer;

    // Generate a random question and store the correct answer
    function generateQuestion() {
        const operators = ['+', '-', '*', '/'];
        const selectedOperator = operators[Math.floor(Math.random() * operators.length)];
        let num1, num2;

        if (selectedOperator === '+' || selectedOperator === '-') {
            num1 = Math.floor(Math.random() * 100) + 1;
            num2 = Math.floor(Math.random() * 100) + 1;
        } else {
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
        }

        // Calculate the correct answer based on the selected operator
        switch (selectedOperator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                correctAnswer = num1 / num2; // Store as a number without decimals
                break;
        }

        questionElement.textContent = `${num1} ${selectedOperator} ${num2} = ?`;
    }

    submitButton.addEventListener("click", function () {
        const userAnswer = parseFloat(answerInput.value);

        if (userAnswer === correctAnswer) {
            resultElement.textContent = "Correct!";
            resultElement.className = "correct";
        } else {
            resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer.toFixed(2)}.`;
            resultElement.className = "incorrect";
        }

        generateQuestion();
    });

    generateQuestion();
});
