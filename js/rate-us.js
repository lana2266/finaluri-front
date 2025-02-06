// სთარ რეითინგ
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener('click', () => {
        stars.forEach((s) => s.classList.remove('selected'));
        star.classList.add('selected');
        selectedRating = star.getAttribute('data-value');
    });
});


const submitButton = document.getElementById('submit-review');
const confirmationMessage = document.querySelector('.confirmation-message');

submitButton.addEventListener('click', () => {
    const reviewText = document.getElementById('review-text').value;
    const favoriteFood = document.getElementById('favorite-food').value;
    const likedComponents = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);
    const experience = document.querySelector('input[name="experience"]:checked')?.value;

    if (!selectedRating || !experience || likedComponents.length === 0 || !reviewText) {
        alert('Please complete all fields before submitting.');
        return;
    }

    confirmationMessage.textContent = `Thank you for your review! You rated us ${selectedRating} stars.`;
});
