document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('walletModal');
    const connectButton = document.getElementById('connectButton');
    const closeButton = document.querySelector('.close-modal');

    // Открыть модальное окно при клике на кнопку
    connectButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Закрыть модальное окно при клике на крестик
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его области
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});