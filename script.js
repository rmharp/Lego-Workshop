document.getElementById('spinButton').addEventListener('click', function() {
    // Start spinning
    var slots = [document.getElementById('slot1'), document.getElementById('slot2'), document.getElementById('slot3')];
    slots.forEach(function(slot) {
        slot.classList.add('spin');
    });

    // Calculate result after a delay
    setTimeout(function() {
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

        // Stop spinning and show result
        slots.forEach(function(slot, index) {
            slot.classList.remove('spin');
            slot.textContent = result;
        });

        document.getElementById('result').innerText = displayText;
    }, 2000); // Adjust the timeout to match the spin animation duration
});
