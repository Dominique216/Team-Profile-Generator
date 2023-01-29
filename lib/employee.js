// need to create parent class with name, is, email params
// needs getName Method getId getEmail and getRole(returns empolee)




class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}


module.exports = Employee