const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function handleFormSubmit(event) {
    event.preventDefault(); 
    alert('Thank you for your message! I’ll get back to you soon.');
    modal.style.display = 'none'; 
}
