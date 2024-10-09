const gradeForm = document.getElementById('gradeForm');
const studentList = document.getElementById('list');
const averageDisplay = document.getElementById('average');
const averageTitle = document.getElementById('average-title');
const errorDisplay = document.getElementById('error');
const calculateAverageButton = document.getElementById('calculateAverage');
let students = [];

gradeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const studentName = document.getElementById('studentName').value;
    const grade = parseFloat(document.getElementById('grade').value);

    // Validate input
    if (isNaN(grade) || grade < 1 || grade > 100) {
        errorDisplay.textContent = 'Please enter a valid grade between 1 and 100.';
        return;
    } else {
        errorDisplay.textContent = ''; // Clear error message
    }

    // Add student to the array
    students.push({ name: studentName, grade: grade });
    updateList();
    gradeForm.reset();
});

calculateAverageButton.addEventListener('click', function() {
    calculateAverage();
});

function updateList() {
    studentList.innerHTML = ''; // Clear the current list
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name}: ${student.grade}`;
        studentList.appendChild(li);
    });
}

function calculateAverage() {
    if (students.length === 0) {
        averageTitle.style.display = 'none';
        averageDisplay.style.display = 'none';
        return;
    }
    
    let total = 0;
    students.forEach(student => {
        total += student.grade;
    });

    const average = total / students.length;
    averageDisplay.textContent = average.toFixed(2);
    averageTitle.style.display = 'block';
    averageDisplay.style.display = 'block';
}