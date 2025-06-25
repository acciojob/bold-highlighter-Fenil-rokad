function highlight() {
    // Select all <strong> elements and turn them green
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)'; // green
    });
}

function return_normal() {
    // Revert all <strong> elements back to black
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)'; // black
    });
}
