class Form {
    constructor(selector) {
        this.formContainer = document.querySelector(selector);
        this.form = document.createElement('form');
        this.fields = [];

        this.formContainer.appendChild(this.form);
    }

    addInput(type, name, placeholder) {
        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.placeholder = placeholder;

        this.fields.push(input);
        this.form.appendChild(input);
    }

    addButton(label, callback) {
        const button = document.createElement('button');
        button.textContent = label;
        button.addEventListener('click', event => {
            event.preventDefault();
            this.validateAndSubmit(callback);
        });

        this.form.appendChild(button);
    }

    validateAndSubmit(callback) {
        const formData = {};

        for (const field of this.fields) {
            const value = field.value.trim();
            const name = field.name;

            if (!value) {
                alert(`Field "${name}" cannot be empty.`);
                return;
            }

            formData[name] = value;
        }

        if (callback) 
            callback(formData);
    }
}

const myForm = new Form('#myForm');

myForm.addInput('Text', 'Name', 'Your Name');
myForm.addInput('Email', 'Email', 'Your Email');
myForm.addInput('Password', 'Password', 'Your Password');

myForm.addButton('Submit', data => {
    console.log('Submitted Data:', data);
});