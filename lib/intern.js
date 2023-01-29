
const Employee = require("./employee")
const fs = require('fs')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

const renderIntern = (newIntern) => {
    fs.appendFile('./dist/index.html', `<div class="card m-2" style="width: 18rem; height: 18rem;">
    <div class="card-header bg-primary text-white p-3">
      <div class="name">${newIntern.getName()}</div>  
      <i class="fa-solid fa-glasses"></i>
      ${newIntern.getRole()}
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newIntern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
      <li class="list-group-item">GitHub: ${newIntern.getSchool()}</li>
    </ul>
</div>` ,(err) => console.log(err));
}

module.exports = {
    Intern, 
    renderIntern, 
}