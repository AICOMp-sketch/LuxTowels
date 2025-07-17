// Modal logic for towel preview
document.querySelectorAll('.towel-card').forEach(card => {
    card.addEventListener('click', function() {
        document.getElementById('modalTitle').textContent = card.dataset.name;
        document.getElementById('modalDesc').textContent = card.dataset.desc;
        document.getElementById('modalImage').src = card.dataset.img;
        document.getElementById('towelModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('towelModal').style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == document.getElementById('towelModal')) {
        document.getElementById('towelModal').style.display = 'none';
    }
});