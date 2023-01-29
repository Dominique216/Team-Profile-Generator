// needs to extend employee
// add office number param and getRole(return Manager)

const Employee = require("./employee")
const fs = require('fs')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
    }

    getOffice() {
        return this.officeNum
    }

    getRole() {
        return 'Manager'
    }
}


const renderManager = (newManager) => {
    fs.appendFile('index.html', `<div class="card m-2" style="width: 18rem; height: 18rem;">
    <div class="card-header bg-primary text-white p-3">
      <div class="name">${newManager.getName()}</div>  
      <i class= "fa-solid fa-people-roof"></i>
      ${newManager.getRole()}
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newManager.getId()}</li>
      <li class="list-group-item">Email: ${newManager.getEmail()}</li>
      <li class="list-group-item">Office Number: ${newManager.getOffice()}</li>
    </ul>
</div>` ,(err) => console.log(err));
}


module.exports = {
    Manager, 
    renderManager, 
}
