document.getElementById('submitBtn').addEventListener('click', () => {
    const subject = document.getElementById('subject').value;
    const numCards = parseInt(document.getElementById('numCards').value);
    const message = document.getElementById('message');

    if (!subject || isNaN(numCards)) {
        message.style.color = 'red';
        message.textContent = 'Please select both subject and number of flashcards.';
        return;
    }

    if (numCards < 3) {
        message.style.color = 'red';
        message.textContent = 'Please select at least 3 flashcards.';
        return;
    }

    // Redirect to another page with query parameters
    const url = `flashcards.html?subject=${encodeURIComponent(subject)}&cards=${numCards}`;
    window.location.href = url;
});

