document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-wrapper');
    const container = document.querySelector('.carousel-container');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const movieCards = Array.from(document.querySelectorAll('.movie-card'));

    let cardWidth = movieCards[0].offsetWidth + 20;
    let activeCardIndex = 0;

    const centerCard = () => {
        cardWidth = movieCards[0].offsetWidth + 20;

        // منتصف الكونتينر
        const containerCenter = container.offsetWidth / 2;

        // بداية الكارت النشط
        const cardOffsetLeft = activeCardIndex * cardWidth;

        // موضع بحيث يكون منتصف الكارت في النص
        const newPosition = containerCenter - (cardOffsetLeft + movieCards[0].offsetWidth / 2);

        wrapper.style.transform = `translateX(${newPosition}px)`;
        updateActiveCard();
    };

    const updateActiveCard = () => {
        movieCards.forEach((card, index) => {
            card.classList.toggle('active', index === activeCardIndex);
        });
    };

    // تفعيل الكارت الأول في المنتصف عند تحميل الصفحة
    centerCard();

    nextBtn.addEventListener('click', () => {
        activeCardIndex++;
        if (activeCardIndex >= movieCards.length) {
            activeCardIndex = 0;
        }
        centerCard();
    });

    prevBtn.addEventListener('click', () => {
        activeCardIndex--;
        if (activeCardIndex < 0) {
            activeCardIndex = movieCards.length - 1;
        }
        centerCard();
    });

    wrapper.addEventListener('click', (event) => {
        const clickedCard = event.target.closest('.movie-card');
        if (clickedCard) {
            activeCardIndex = movieCards.indexOf(clickedCard);
            centerCard();
        }
    });

    window.addEventListener('resize', centerCard);
});



