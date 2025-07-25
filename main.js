document.addEventListener('DOMContentLoaded', function () {
    const ipElement = document.querySelector('.mcip');

    if (ipElement) {
        ipElement.style.cursor = 'pointer';

        ipElement.addEventListener('click', function () {
            const ip = ipElement.textContent.trim();

            navigator.clipboard.writeText(ip).then(() => {
                alert('Server IP has been copied to clipboard, paste it and join us!');
                console.log('IP copied to clipboard:', ip);
            }).catch(err => {
                alert('Failed to copy IP');
                console.error(err);
            });
        });
    }
});