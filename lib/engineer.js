
const Employee = require("./employee")
const fs = require('fs')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}


const renderEngineer = (newEngineer) => {
    fs.appendFile('index.html', `<div class="card m-2" style="width: 18rem; height: 18rem;">
    <div class="card-header bg-primary text-white p-3">
      <div class="name">${newEngineer.getName()}</div>  
      <i class="fa-solid fa-glasses"></i>
      ${newEngineer.getRole()}
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newEngineer.getId()}</li>
      <li class="list-group-item">Email: ${newEngineer.getEmail()}</li>
      <li class="list-group-item">GitHub: ${newEngineer.getGithub()}</li>
    </ul>
</div>` ,(err) => console.log(err));
}


module.exports = {
    Engineer, 
    renderEngineer, 
}