// Get Random Animal
const question = <HTMLElement>document.querySelector('section.question');
const answer = <HTMLParagraphElement>document.querySelector('p.answer');

// fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
// .then(response => response.json())
// .then(animal => {
/* Setting the text content of the answer paragraph to the name of the animal in all caps. */
// answer.textContent = animal.name.toUpperCase();

const answerContainer = document.createElement('section');
answerContainer.classList.add('answer-container');
answer.textContent?.split('').forEach(letter => {
    const character = document.createElement('span');
    character.classList.add('answer');
    if (letter.match(/[a-zA-Z\s]/)) {
        character.textContent = letter;
    }
    answerContainer.appendChild(character);
});
answer.remove();
question.append(answerContainer);


// Keyboard events
const keyboardCharacters: NodeListOf<HTMLSpanElement> = document.querySelectorAll('span.key');
const answers: NodeListOf<HTMLSpanElement> = document.querySelectorAll('span.answer');
const words: string[] = [];

answers.forEach(answer => {
    const character = answer.textContent?.toUpperCase();
    if (character) {
        words.push(character);
    }
});

let correct = 0, incorrect = 0;
for (const word of words) {
    if (word === ' ') {
        correct++;
    }
}

const DURATION = 2000;

// Hangman
const pole = <HTMLDivElement>document.querySelector('div.pole');
const rope = <HTMLDivElement>document.querySelector('div.rope');
const head = <HTMLDivElement>document.querySelector('div.head');
const body = <HTMLDivElement>document.querySelector('div.body');
const leftArm = <HTMLDivElement>document.querySelector('div.left-arm');
const rightArm = <HTMLDivElement>document.querySelector('div.right-arm');
const leftLeg = <HTMLDivElement>document.querySelector('div.left-leg');
const rightLeg = <HTMLDivElement>document.querySelector('div.right-leg');

keyboardCharacters.forEach(keyboardCharacter => {
    keyboardCharacter.addEventListener('click', () => {
        if (!keyboardCharacter.classList.contains('correct') && !keyboardCharacter.classList.contains('incorrect')) {
            const character = keyboardCharacter.dataset.key;
            if (character) {
                if (words.includes(character)) {
                    keyboardCharacter.classList.add('correct');
                    answers.forEach(answer => {
                        if (answer.textContent?.toUpperCase() === character) {
                            answer.style.color = 'black';
                            correct++;
                            if (correct === words.length) {
                                const flashMessage = <HTMLElement>document.querySelector('section.flash');
                                flashMessage.classList.add('flash-message');
                                flashMessage.style.backgroundColor = 'lime';
                                flashMessage.textContent = 'You Win!';

                                const middleLayer = document.createElement('section');
                                middleLayer.classList.add('middle-layer');
                                document.body.appendChild(middleLayer);

                                setTimeout(() => {
                                    window.location.reload();
                                }, DURATION);
                            }
                        }
                    });
                } else {
                    keyboardCharacter.classList.add('incorrect');
                    incorrect++;
                    if (incorrect === 1) {
                        pole.style.display = 'flex';
                        pole.style.justifyContent = 'center';
                        pole.style.alignItems = 'center';
                    } else if (incorrect === 2) {
                        pole.remove();
                        rope.style.display = 'flex';
                        rope.style.justifyContent = 'center';
                        rope.style.alignItems = 'center';
                    } else if (incorrect === 3) {
                        rope.remove();
                        head.style.display = 'flex';
                        head.style.justifyContent = 'center';
                        head.style.alignItems = 'center';
                    } else if (incorrect === 4) {
                        head.remove();
                        body.style.display = 'flex';
                        body.style.justifyContent = 'center';
                        body.style.alignItems = 'center';
                    } else if (incorrect === 5) {
                        body.remove();
                        leftArm.style.display = 'flex';
                        leftArm.style.justifyContent = 'center';
                        leftArm.style.alignItems = 'center';
                    } else if (incorrect === 6) {
                        leftArm.remove();
                        rightArm.style.display = 'flex';
                        rightArm.style.justifyContent = 'center';
                        rightArm.style.alignItems = 'center';
                    } else if (incorrect === 7) {
                        rightArm.remove();
                        leftLeg.style.display = 'flex';
                        leftLeg.style.justifyContent = 'center';
                        leftLeg.style.alignItems = 'center';
                    } else if (incorrect === 8) {
                        leftLeg.remove();
                        rightLeg.style.display = 'flex';
                        rightLeg.style.justifyContent = 'center';
                        rightLeg.style.alignItems = 'center';

                        const flashMessage = <HTMLElement>document.querySelector('section.flash');
                        flashMessage.classList.add('flash-message');
                        flashMessage.style.backgroundColor = 'red';
                        flashMessage.textContent = 'You Lose!';

                        const middleLayer = document.createElement('section');
                        middleLayer.classList.add('middle-layer');
                        document.body.appendChild(middleLayer);

                        setTimeout(() => {
                            window.location.reload();
                        }, DURATION);
                    }
                }
            }
        }
    });
});

window.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const keyboardCharacter = <HTMLSpanElement>document.querySelector(`span.key[data-key="${key}"]`);
    if (keyboardCharacter) {
        if (!keyboardCharacter.classList.contains('correct') && !keyboardCharacter.classList.contains('incorrect')) {
            keyboardCharacter.classList.add('key-pressed');
            const character = keyboardCharacter.dataset.key;
            if (character) {
                if (words.includes(character)) {
                    keyboardCharacter.classList.add('correct');
                    answers.forEach(answer => {
                        if (answer.textContent?.toUpperCase() === character) {
                            answer.style.color = 'black';
                            correct++;
                            if (correct === words.length) {
                                const flashMessage = <HTMLElement>document.querySelector('section.flash');
                                flashMessage.classList.add('flash-message');
                                flashMessage.style.backgroundColor = 'lime';
                                flashMessage.textContent = 'You Win!';

                                const middleLayer = document.createElement('section');
                                middleLayer.classList.add('middle-layer');
                                document.body.appendChild(middleLayer);

                                setTimeout(() => {
                                    window.location.reload();
                                }, DURATION);
                            }
                        }
                    });
                } else {
                    keyboardCharacter.classList.add('incorrect');
                    incorrect++;
                    console.log(incorrect);
                    if (incorrect === 1) {
                        pole.style.display = 'flex';
                        pole.style.justifyContent = 'center';
                        pole.style.alignItems = 'center';
                    } else if (incorrect === 2) {
                        pole.remove();
                        rope.style.display = 'flex';
                        rope.style.justifyContent = 'center';
                        rope.style.alignItems = 'center';
                    } else if (incorrect === 3) {
                        rope.remove();
                        head.style.display = 'flex';
                        head.style.justifyContent = 'center';
                        head.style.alignItems = 'center';
                    } else if (incorrect === 4) {
                        head.remove();
                        body.style.display = 'flex';
                        body.style.justifyContent = 'center';
                        body.style.alignItems = 'center';
                    } else if (incorrect === 5) {
                        body.remove();
                        leftArm.style.display = 'flex';
                        leftArm.style.justifyContent = 'center';
                        leftArm.style.alignItems = 'center';
                    } else if (incorrect === 6) {
                        leftArm.remove();
                        rightArm.style.display = 'flex';
                        rightArm.style.justifyContent = 'center';
                        rightArm.style.alignItems = 'center';
                    } else if (incorrect === 7) {
                        rightArm.remove();
                        leftLeg.style.display = 'flex';
                        leftLeg.style.justifyContent = 'center';
                        leftLeg.style.alignItems = 'center';
                    } else if (incorrect === 8) {
                        leftLeg.remove();
                        rightLeg.style.display = 'flex';
                        rightLeg.style.justifyContent = 'center';
                        rightLeg.style.alignItems = 'center';

                        const flashMessage = <HTMLElement>document.querySelector('section.flash');
                        flashMessage.classList.add('flash-message');
                        flashMessage.style.backgroundColor = 'red';
                        flashMessage.textContent = 'You Lose!';

                        const middleLayer = document.createElement('section');
                        middleLayer.classList.add('middle-layer');
                        document.body.appendChild(middleLayer);

                        setTimeout(() => {
                            window.location.reload();
                        }, DURATION);
                    }
                }
            }
        }
    } else {
        const flashMessage = <HTMLElement>document.querySelector('section.flash');
        flashMessage.classList.add('flash-message');
        flashMessage.textContent = `Unknown key: ${key}`;
    }
});

window.addEventListener('keyup', (event) => {
    const key = event.key.toUpperCase();
    const keyboardCharacter = <HTMLSpanElement>document.querySelector(`span.key[data-key="${key}"]`);
    if (keyboardCharacter) {
        keyboardCharacter.classList.remove('key-pressed');
    }
});
// });

// Flash Message
const flashMessage = <HTMLElement>document.querySelector('section.flash');

flashMessage.addEventListener('click', () => {
    flashMessage.classList.remove('flash-message');
    flashMessage.textContent = '';
});

setTimeout(() => {
    flashMessage.classList.remove('flash-message');
    flashMessage.textContent = '';
}, DURATION);
