document.getElementById('spinButton').addEventListener('click', function() {
    var result = Math.floor(Math.random() * 3) + 1;
    var displayText = '';

    switch(result) {
        case 1:
            displayText = 'Builder';
            break;
        case 2:
            displayText = 'Representative';
            break;
        case 3:
            displayText = 'Distorter';
            break;
    }

    document.getElementById('result').innerText = displayText;
});
