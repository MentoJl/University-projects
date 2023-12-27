class Notification {
    constructor() {
        this.container = document.getElementById('myNotification');
    }

    show(message, type) {
        this.container.textContent = message;
        this.container.className = `notification ${type}`;
        this.container.style.display = 'block';

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close-btn';
        closeBtn.addEventListener('click', () => this.hide());

        this.container.appendChild(closeBtn);
    }

    hide() {
        this.container.style.display = 'none';
    }
}

const notification = new Notification();

function showSuccess() {
    notification.show('Успішне Повідомлення!', 'success');
}

function showError() {
    notification.show('Помилкове Повідомлення!', 'error');
}

function showInfo() {
    notification.show('Інформаційне Повідомлення!', 'info');
}