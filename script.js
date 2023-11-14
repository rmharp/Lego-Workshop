document.getElementById('spinButton').addEventListener('click', function() {
    var result = Math.floor(Math.random() * 3) + 1;
    var displayText = '';

    switch(result) {
        case 1:
            displayText = 'Builder - Time to construct your escape!';
            break;
        case 2:
            displayText = 'Representative - Be the face of your team\'s escape!';
            break;
        case 3:
            displayText = 'Distorter - Twist and turn your way out!';
            break;
    }

    document.getElementById('result').innerText = displayText;
});
