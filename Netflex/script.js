const modal = document.getElementById('imageModal')
const modalImg = document.getElementById('fullImg')
const closeBtn = document.querySelector('.close')

document.querySelectorAll('.row-cards img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})