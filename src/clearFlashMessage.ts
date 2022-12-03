export default (delay: number) => {
    const flashMessage = <HTMLElement>document.querySelector('section.flash');

    flashMessage.addEventListener('click', () => {
        flashMessage.classList.remove('flash-message');
        flashMessage.textContent = '';
    });

    setTimeout(() => {
        flashMessage.classList.remove('flash-message');
        flashMessage.textContent = '';
    }, delay);
};
