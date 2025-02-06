function calculateGrade() {
    const name = document.getElementById('studentName').value;
    const marks = parseFloat(document.getElementById('marks').value);
    const resultDiv = document.getElementById('result');

    if (!name || isNaN(marks) || marks < 0 || marks > 100) {
        resultDiv.innerText = "Please enter a valid name and marks between 0 and 100.";
        return;
    }

    let grade;
    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 75) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 65) {
        grade = 'D';
    } else if (marks >= 60) {
        grade = 'D';
    } else if (marks >= 55) {
        grade = 'D';
    } else if (marks >= 50) {
        grade = 'D';
    } else if (marks >= 45) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    resultDiv.innerText = `${name} has received a grade of: ${grade}`;
}