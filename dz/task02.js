const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function loadInitialReviews() {
    const reviewsContainer = document.getElementById('reviews');
    initialData.forEach(product => {
        const productDiv = document.createElement('div');   
        productDiv.className = 'review-container';
        productDiv.innerHTML = `<h3>${product.product}</h3>`;
        product.reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.textContent = review.text;
            productDiv.appendChild(reviewDiv);
        });
        reviewsContainer.appendChild(productDiv);
    })
};

function addReview() {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value.trim();
    const reviewContainer = document.getElementById('reviews');
    try {
        if (reviewText.length < 50 || reviewText.length > 500) {
            throw new Error('Длинна отзыва должна быть от 50 до 500 символов');
        }

        const newReviewDiv = document.createElement('div');
        newReviewDiv.textContent = reviewText;
        reviewContainer.appendChild(newReviewDiv);

        reviewInput.value = '';
        reviewInput.focus();
    } catch (error) {
        alert(error.message);
    }
};

document.addEventListener(DOMContentLoaded, loadInitialReviews); 