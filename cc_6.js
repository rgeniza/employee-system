class Employee{
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `Employee Name:${this.name}, Department:${this.department}`;
    }

}

class Manager extends Employee {
    constructor(name , department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe(){
        return `Manager Name: ${this.name}, Department:${this.department}, teamSize:${this.teamSize}`;
    }
}


 const emp1 = new Employee("John C", "Accounting");
const emp2 = new Employee("Mark F", "IT");
const mngr1 = new Manager("Lisa G", "Accounting", "15");
const mngr2 = new Manager("Dan L", "Engineering", "10");

console.log(emp1)
console.log(emp2)
console.log(mngr1)
console.log(mngr2)

class Company {
    constructor(){
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployee() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}
const namedCompany = new Company();

namedCompany.addEmployee(emp1);
namedCompany.addEmployee(emp2);
namedCompany.addEmployee(mngr1);
namedCompany.addEmployee(mngr2);

namedCompany.listEmployee();

