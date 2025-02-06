// ბურგერ მენუ
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const form = document.querySelector('form'); 
form.addEventListener('submit', (event) => {
    event.preventDefault(); 


    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }


    alert('Form submitted successfully!'); 
});

const cookieNotification = document.getElementById('cookie-notification'); 
const acceptButton = document.getElementById('accept-cookie');

acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieNotification.style.display = 'none';
});

if (localStorage.getItem('cookieAccepted') === 'true') {
    cookieNotification.style.display = 'none';
}


function fetchData() {

    fetch('your-api-endpoint') 
        .then(response => response.json())
        .then(data => {

            console.log('Data from server:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = 'Scroll to Top';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #333;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
`;
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});