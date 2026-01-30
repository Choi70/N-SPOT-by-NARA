
document.addEventListener('DOMContentLoaded', () => {
    // 별점 표시 웹 구성 요소
    class RatingStars extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            const rating = parseFloat(this.getAttribute('data-rating') || 0);
            const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
            this.shadowRoot.innerHTML = `<span>${stars}</span>`;
        }
    }
    customElements.define('rating-stars', RatingStars);

    // 더보기 버튼 기능 (향후 구현)
    const readMoreButton = document.querySelector('.read-more');
    if (readMoreButton) {
        readMoreButton.addEventListener('click', () => {
            // 상세 설명 표시 로직 추가
            alert('더보기 기능이 구현될 예정입니다.');
        });
    }
});
