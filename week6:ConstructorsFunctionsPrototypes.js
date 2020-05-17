var employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Part Time';
}

Employee.prototype.printEmployeeForm = function() {
    console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status);
}

// Call the printEmployeeForm method for each employee
// Put the generated employees into the employees array using whichever method you prefer.

var emp1 = new Employee('Anita', 'Teacher', '$30/hr');
emp1.status = 'Part Time';
emp1.printEmployeeForm();

var emp2 = new Employee('Corey', 'Counselor', '$45,000');
emp2.printEmployeeForm();

var emp3 = new Employee('Patrick', 'Contractor', '$80,000');
emp3.printEmployeeForm();

employees.push(emp1, emp2, emp3);
console.log(employees);
