'Use Strict';

const demoBtnEl = document.getElementById('DEMO');

var alarm = new Audio("/Assets/Media/demo/Door_entry_notification-Loge_the_60th-95203129.mp3"); // Audio from https://soundbible.com/1758-Door-Entry-Notification.html //

alarm.playbackRate = 1.20;

imgEl.classList.remove('hiddenElement'); // Inventory Demo (image only).  It is my hope to use Adobe Pr, and create some cool Title animation video. //

// Function to start my quiz. //
function beginDemo() {
    
    alarm.play();

    imgEl.classList.remove('hiddenElement');

    console.log(beginDemo);
};

demoBtnEl.addEventListener('click', beginDemo);