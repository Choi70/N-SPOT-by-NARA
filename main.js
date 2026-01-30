
document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more-btn');
    const descriptionContent = document.getElementById('description-content');

    if (readMoreBtn && descriptionContent) {
        readMoreBtn.addEventListener('click', () => {
            descriptionContent.classList.toggle('expanded');
            if (descriptionContent.classList.contains('expanded')) {
                readMoreBtn.textContent = '접기';
            } else {
                readMoreBtn.textContent = '더보기';
            }
        });
    }

    // 별점 표시 기능 (기존 코드 유지)
    const ratingStars = document.querySelectorAll('.rating-stars');
    ratingStars.forEach(stars => {
        const rating = parseInt(stars.dataset.rating);
        stars.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    });
});
