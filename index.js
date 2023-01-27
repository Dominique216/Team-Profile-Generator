const inquirer = require('inquirer')

// asks info about engineer
engineerQs = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'ManagersName'
            },
            {
                type: 'input',
                message: "What is your engineer's ID",
                name: 'ManagersId'
            },
            {
                type: 'input',
                message: "What is your engineer's Email?",
                name: 'ManagersEmail'
            },
            {
                type: 'input',
                message: "What is your engineer's Office Number?",
                name: 'ManagersOffice'
            },
            {
                type: 'checkbox',
                message: "Would you like to add a new team member",
                name: 'options',
                choices: ['Add Engineer', 'Add Intern', 'Finish biulding my team'],
            } 
        ])
    .then((data) => nextup(data))
}

// asks info about interns
internQs = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'ManagersName'
        },
        {
            type: 'input',
            message: "What is your intern's ID",
            name: 'ManagersId'
        },
        {
            type: 'input',
            message: "What is your intern's Email?",
            name: 'ManagersEmail'
        },
        {
            type: 'input',
            message: "What is your intern's Office Number?",
            name: 'ManagersOffice'
        },
        {
            type: 'checkbox',
            message: "Would you like to add a new team member",
            name: 'options',
            choices: ['Add Engineer', 'Add Intern', 'Finish biulding my team'],
        } 
    ])
    .then((data) => nextup(data))
}

// calls the function questions corresponding to which team member you want to add
nextup = (data)=> {
    if(data.options[0] === 'Add Engineer') {
        return engineerQs()
    } else if(data.options[0] === 'Add Intern') {
        return internQs()
    } else if(data.options[0] === 'Finish biulding my team'){
        return
    }
}

// first propmt that comes up. Asks about the team manager
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'ManagersName'
        },
        {
            type: 'input',
            message: "What is your team manager's ID",
            name: 'ManagersId'
        },
        {
            type: 'input',
            message: "What is your team manager's Email?",
            name: 'ManagersEmail'
        },
        {
            type: 'input',
            message: "What is your team manager's Office Number?",
            name: 'ManagersOffice'
        },
        {
            type: 'checkbox',
            message: "Would you like to add a new team member",
            name: 'options',
            choices: ['Add Engineer', 'Add Intern', 'Finish biulding my team'],
        }
    ])
    .then((data) => nextup(data))
    

