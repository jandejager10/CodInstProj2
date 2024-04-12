document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('gameGrid');
    const statusText = document.getElementById('statusText');
    let attempts = 0;
    let matches = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;

    function createCard(cardName) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = cardName;

        //ensure cards start face down
        cardElement.addEventListener('click', flipCard);
        return cardElement;
    }

    function flipCard() {
        if (lockBoard || this.classList.contains('flipped')) return;
        
        // Show the card's image only when it's flipped
        cardElement.style.backgroundImage = `url('assets/img/${cardName}.png')`;
        

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        matches++;
        updateStatusText();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            // Remove background image to hide the card face
            firstCard.style.backgroundImage = '';
            secondCard.style.backgroundImage = '';

            resetBoard();
        }, 1500);
        attempts++;
        updateStatusText();
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function updateStatusText() {
        statusText.textContent = `Attempts: ${attempts} | Matches: ${matches}`;
    }

    // Code to reset the game
    function resetGame() {
        grid.innerHTML = '';
        attempts = 0;
        matches = 0;
        initGame();
    }

    // Initialize game
    function initGame() {
        const cardNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const deck = [...cardNames, ...cardNames]
            .sort(() => Math.random() - 0.5)
            .map(cardName => createCard(cardName));

        deck.forEach(card => {
            //Ensure card starts face down
            card.classList.remove('flipped');
            card.style.backgroundImage = '';
            grid.appendChild(card);
        });
        updateStatusText();
    }

    //Initialise game
    initGame();
    // Event listener for the reset button
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

function showInstructions() {
    alert('Match cards with identical symbols. Click to flip a card, find its match to keep it open. Match all pairs to win.');
}
