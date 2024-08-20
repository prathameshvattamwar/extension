document.addEventListener('DOMContentLoaded', function() {
    const emojiContainer = document.getElementById('emojiContainer');
    
    // Function to create emoji elements
    function createEmojiCard(emojis) {
        emojiContainer.innerHTML = ''; // Clear the container

        emojis.forEach((emoji, index) => {
            // Create emoji element
            const emojiElement = document.createElement('span');
            emojiElement.className = 'emoji';
            emojiElement.textContent = emoji;
            emojiElement.title = emoji;

            // Append emoji element to the container
            emojiContainer.appendChild(emojiElement);
        });
    }

    // Load emojis from emojis.js
    createEmojiCard(window.allEmojis); // Use the global variable from emojis.js
});
