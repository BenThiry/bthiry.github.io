document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('clicked');
            this.classList.toggle('animated');
            setTimeout(() => {
                this.classList.remove('animated');
            }, 300);
        });
    });
});
