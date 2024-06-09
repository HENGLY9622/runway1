document.addEventListener('keydown', function(event) {
    const character = document.querySelector('.character');
    const runway = document.querySelector('.runway');
    
    if(event.code === 'ArrowUp') {
        jump(character);
    } else if(event.code === 'ArrowLeft') {
        moveLeft(character, runway);
    } else if(event.code === 'ArrowRight') {
        moveRight(character, runway);
    }
});

function jump(character) {
    if (!character.classList.contains('jump')) {
        character.classList.add('jump');
        setTimeout(() => {
            character.classList.remove('jump');
        }, 300);
    }
}

function moveLeft(character, runway) {
    const currentLeft = parseInt(window.getComputedStyle(character).left);
    if (currentLeft > 0) {
        character.style.left = `${currentLeft - 20}px`;
    }
}

function moveRight(character, runway) {
    const currentLeft = parseInt(window.getComputedStyle(character).left);
    const runwayWidth = runway.offsetWidth / 2;
    if (currentLeft < runwayWidth - character.offsetWidth) {
        character.style.left = `${currentLeft + 20}px`;
    }
}
