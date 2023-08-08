document.addEventListener('DOMContentLoaded', function () {
    // Get all recipe card elements
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Add click event listeners to each recipe card
    recipeCards.forEach(card => {
        const toggleButton = card.querySelector('.toggle-button');
        const instructions = card.querySelector('.instructions');

        toggleButton.addEventListener('click', function () {
            instructions.classList.toggle('hidden');
            // Toggle the button text
            toggleButton.textContent = instructions.classList.contains('hidden') ? 'Show Instructions' : 'Hide Instructions';
        });
    });
});
