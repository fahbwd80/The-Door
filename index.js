document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    var audio = document.getElementById("my-audio");

    // Get the container element where you want to trigger the audio
    var container = document.getElementById("audio-container");

    // Add a mouseenter event listener to the container
    container.addEventListener("mouseenter", function() {
        // Check if the audio is paused or has not started playing yet, then play it
        if (audio.paused) {
            audio.play();
        }
    });
});