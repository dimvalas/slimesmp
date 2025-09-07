document.addEventListener('DOMContentLoaded', function () {
    const javaBtn = document.querySelector('.java-btn');
    const bedrockBtn = document.querySelector('.bedrock-btn');

    // New code for the mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('menu-open');
        });
    }

    // Original function for the old IP element, in case you still use it elsewhere
    const ipElement = document.querySelector('.mcip');
    if (ipElement) {
        ipElement.style.cursor = 'pointer';
        ipElement.addEventListener('click', function () {
            const ip = ipElement.textContent.trim();
            copyToClipboard(ip, 'Server IP');
        });
    }

    // New function for the Java Join Button
    if (javaBtn) {
        javaBtn.addEventListener('click', function () {
            const ip = 'play.slimesmp.online';
            copyToClipboard(ip, 'Java IP');
        });
    }

    // New function for the Bedrock Join Button
    if (bedrockBtn) {
        bedrockBtn.addEventListener('click', function () {
            const bedrockDetails = 'Unavailable';
            copyToClipboard(bedrockDetails, 'This does NOT work for now!');
        });
    }

    // Reusable copy function
    function copyToClipboard(text, type) {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${type} has been copied to clipboard!`);
            console.log(`${type} copied to clipboard:`, text);
        }).catch(err => {
            alert(`Failed to copy ${type}`);
            console.error(err);
        });
    }
});
