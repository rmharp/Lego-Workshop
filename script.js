document.getElementById('spinButton').addEventListener('click', function() {
    var slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3')];
    slots.forEach(function(slot) {
        slot.classList.add('spin');
    });

    setTimeout(function() {
        var result = getWeightedResult();
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

        slots.forEach(function(slot) {
            slot.classList.remove('spin');
            slot.textContent = result;
        });

        document.getElementById('result').innerText = displayText;
    }, 2000);
});

function getWeightedResult() {
    var weights = {
        1: 45, // Builder
        2: 35, // Representative
        3: 20  // Distorter
    };

    var totalWeight = 100;
    var random = Math.random() * totalWeight;
    var weightSum = 0;

    for (var i in weights) {
        weightSum += weights[i];
        if (random <= weightSum) {
            return parseInt(i);
        }
    }
}
