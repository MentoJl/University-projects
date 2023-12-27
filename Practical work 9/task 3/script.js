class Table {
    constructor(data, selector) {
        this.data = data;
        this.tableContainer = document.querySelector(selector);
        this.table = document.createElement('table');
        this.tableContainer.appendChild(this.table);

        this.renderTable();
        this.setupManualEntryForm();
    }

    renderTable() {
        this.data.forEach(rowData => this.addRow(rowData));
    }

    addRow(rowData) {
        const row = this.table.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    }

    addColumn(columnData) {
        this.table.tHead.insertRow().insertCell().textContent = columnData[0];

        columnData.slice(1).forEach((cellData, rowIndex) => {
            const cell = this.table.rows[rowIndex + 1].insertCell();
            cell.textContent = cellData;
        });
    }

    setupManualEntryForm() {
        const inputRow = document.createElement('div');
        inputRow.classList.add('input-row');

        this.data[0].forEach(header => {
            const input = document.createElement('input');
            input.setAttribute('placeholder', header);
            inputRow.appendChild(input);
        });

        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.addEventListener('click', () => this.handleAddManualEntry());

        inputRow.appendChild(addButton);
        this.tableContainer.appendChild(inputRow);
    }

    handleAddManualEntry() {
        const inputRow = this.tableContainer.querySelector('.input-row');
        const inputElements = inputRow.querySelectorAll('input');
        const rowData = Array.from(inputElements).map(input => input.value);

        this.addRow(rowData);
        inputElements.forEach(input => (input.value = ''));
    }
}
const initialData = [
    ['Name', 'Age', 'Country'],
    ['John Doe', '30', 'USA'],
    ['Jane Doe', '25', 'Canada']
];

const myTable = new Table(initialData, '#myTable');