class Student {
    constructor(lastName, firstName, grades) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let tableHtml = '<table border="1"><tr><th>Last Name</th><th>First Name</th><th>Math</th><th>History</th><th>Sport</th><th>Average Grade</th></tr>';
        this.students.forEach(student => {
            tableHtml += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.grades[0]}</td><td>${student.grades[1]}</td><td>${student.grades[2]}</td><td>${student.getAverageGrade().toFixed(2)}</td></tr>`;
        });
        tableHtml += '</table>';
        return tableHtml;
    }
}

class StylesTable extends ListOfStudents {
    getStyles() {
        return '<style>table { border-collapse: collapse; width: 50%; } th, td { padding: 10px; text-align: left; }</style>';
    }

    getTotalAvg() {
        const totalAvg = (this.students.reduce((acc, student) => acc + student.getAverageGrade(), 0) / this.students.length).toFixed(2);
        return `<div style="background-color: lightgreen; padding: 10px; margin-top: 10px;"><strong>Середній бал по групі:</strong> ${totalAvg}</div>`;
    }
}

const studentsArray = [
    new Student('Федорко', 'Петро', [3, 4, 5]),
    new Student('Остапенко', 'Сергій', [4, 5, 5]),
    new Student('Колос', 'Олеся', [4, 3, 3]),
];

const styledTable = new StylesTable(studentsArray);

document.body.innerHTML += styledTable.getTableList();
document.body.innerHTML += styledTable.getTotalAvg();