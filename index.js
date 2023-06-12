let discoInterval = null;

function buttonToggle() {
    let onButtonEl = document.getElementById('onButton');
    let offButtonEl = document.getElementById('offButton');
    let lightbulbEl = document.getElementById('lightbulb');

    if (lightbulbEl.src.includes('lightoff.jpg')) {
        lightbulbEl.src = 'lighton.jpg';
        onButtonEl.disabled = true;
        offButtonEl.disabled = false;
    } else {
        lightbulbEl.src = 'lightoff.jpg';
        onButtonEl.disabled = false;
        offButtonEl.disabled = true;
    }
}

function discoButtonToggle() {
    let lightbulbEl = document.getElementById('lightbulb');
    let discoButtonEl = document.getElementById('discoButton');

    if (discoInterval) {
        clearInterval(discoInterval);
        discoInterval = null;
        discoButtonEl.textContent = 'Display disco colors';
        lightbulbEl.style.backgroundColor = getRandomColor(); 
    } else {
        discoInterval = setInterval(function() {
         lightbulbEl.style.backgroundColor = getRandomColor();
        }, 500);
        discoButtonEl.textContent = 'Stop disco colors';
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color = color +letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
   buttonToggle.addEventListener('click',getNewColor);
   lightbulbEl.style.background=color
    return color;
}