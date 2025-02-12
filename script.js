function checkAnswer(answer) {
    let result = document.getElementById("quiz-result");
    if (answer === 'A') {
        result.innerHTML = "GALING MO, BABYY! I miss you. Hubad ka. Love time. 😍";
        result.style.color = "green";
    } else {
        result.innerHTML = "GALING MO, BABYY! I miss you. Hubad ka. Love time. 😍";
        result.style.color = "violet";
    }
}

function showMessage() {
    document.getElementById("hidden-message").style.display = "block";
}
