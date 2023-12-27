class Modal {
    constructor() {
        this.modal = document.getElementById('myModal');
        this.isDragging = false;
    }

    open() {
        this.modal.style.display = 'block';
    }

    close() {
        this.modal.style.display = 'none';
    }

    dragStart(e) {
        this.isDragging = true;
        this.offsetX = e.clientX - this.modal.offsetLeft;
        this.offsetY = e.clientY - this.modal.offsetTop;

        const dragMove = (e) => {
            if (this.isDragging) {
                this.modal.style.left = e.clientX - this.offsetX + 'px';
                this.modal.style.top = e.clientY - this.offsetY + 'px';
            }
        };

        const dragEnd = () => {
            this.isDragging = false;
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
        };

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
    }

    login() {
        const loginValue = document.getElementById('login').value;
        const passwordValue = document.getElementById('password').value;
        console.log('Логін:', loginValue);
        console.log('Пароль:', passwordValue);
        this.close();
    }
}

const modalInstance = new Modal();