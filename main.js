document.addEventListener('DOMContentLoaded', function () {
    const ipElement = document.querySelector('.mcip');

    if (ipElement) {
        ipElement.style.cursor = 'pointer'; // Optional: makes it look clickable

        ipElement.addEventListener('click', function () {
            const ip = ipElement.textContent.trim(); // Trim leading/trailing spaces/newlines

            navigator.clipboard.writeText(ip).then(() => {
                alert('ip copied to clipboard');
            }).catch(err => {
                alert('Failed to copy IP');
                console.error(err);
            });
        });
    }
});