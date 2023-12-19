var audio = new Audio('thala.mpeg');

function checkInput() {
    var inputText = document.getElementById('inputText').value;
    var resultContainer = document.getElementById('result');

    if (isNaN(inputText) && inputText.length === 7) {
        resultContainer.innerText = 'thala for a reason';
        playAudio();
    } else if (!isNaN(inputText) && getDigitSum(inputText) === 7) {
        resultContainer.innerText = 'thala for a reason';
        playAudio();
    } else {
        resultContainer.innerText = 'not thala';
        stopAudio();
    }
}

function getDigitSum(number) {
    return number.toString().split('').reduce(function (acc, digit) {
        return acc + parseInt(digit);
    }, 0);
}

function playAudio() {
    audio.play();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function shareResult() {
    var result = document.getElementById('result').innerText;
    var encodedResult = encodeURIComponent(result);
    var shareLink = window.location.href + '?result=' + encodedResult;

    alert('Share this link: ' + shareLink);
}
