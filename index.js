const inquirer = require('inquirer')
const fs = require('fs')
const engineers = require('./lib/engineer')
const managerone = require('./lib/manager')
const interns = require('./lib/intern')
// const Employee = require('./lib/employee')
const Allinfo = []

// asks info about engineer
const engineerQs = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'EngineersName'
            },
            {
                type: 'input',
                message: "What is your engineer's ID",
                name: 'EngineersId'
            },
            {
                type: 'input',
                message: "What is your engineer's Email?",
                name: 'EngineersEmail'
            },
            {
                type: 'input',
                message: "What is your engineer's GitHub username?",
                name: 'EngineersGit'
            },
            {
                type: 'checkbox',
                message: "Would you like to add a new team member",
                name: 'options',
                choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
            } 
        ])
    .then((data) => {
        Allinfo.push(data)
        nextup(data);
    })
}

// asks info about interns
const internQs = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'InternsName'
        },
        {
            type: 'input',
            message: "What is your intern's ID",
            name: 'InternsId'
        },
        {
            type: 'input',
            message: "What is your intern's Email?",
            name: 'InternsEmail'
        },
        {
            type: 'input',
            message: "What is your intern's School?",
            name: 'InternsSchool'
        },
        {
            type: 'checkbox',
            message: "Would you like to add a new team member",
            name: 'options',
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
        } 
    ])
    .then((data) => {
        Allinfo.push(data)
        nextup(data)
    })
}

// will render the cards add the ending tags to index.html when the user id done adding employees
const finished = () => {  
    console.log(Allinfo)
    renderHtmlCards();
    fs.appendFile('./dist/index.html', `</main>
<script src="https://kit.fontawesome.com/24e32b4f06.js" crossorigin="anonymous"></script>
</body>
</html>`, (err) =>
err ? console.error(err) : console.log('Success!'))
}

// calls the questions corresponding to which team member you want to add
nextup = (data)=> {
    if(data.options[0] === 'Add Engineer') {
        return engineerQs()
    } else if(data.options[0] === 'Add Intern') {
        return internQs()
    } else if(data.options[0] === 'Finish building my team'){
        return finished()
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
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
        }
    ])
    .then((data) => {
        Allinfo.push(data)
        nextup(data)
    })

// this will check the all info in array and iterrate through all the objs that have been added and create the correct caards depending on the properties of the objects
const renderHtmlCards = () => {
    Allinfo.forEach(obj => {
        if(obj.hasOwnProperty('ManagersName')) {
            const managerNew = new managerone.Manager(obj.ManagersName, obj.ManagersId, obj.ManagersEmail, obj.ManagersOffice)
            managerone.renderManager(managerNew);
        } else if(obj.hasOwnProperty('EngineersName')) {
            const engineerNew = new engineers.Engineer(obj.EngineersName, obj.EngineersId, obj.EngineersEmail, obj.EngineersGit)
            engineers.renderEngineer(engineerNew)
        } else if(obj.hasOwnProperty('InternsName')) {
            const internNew = new interns.Intern(obj.InternsName, obj.InternsId, obj.InternsEmail, obj.InternsSchool)
            interns.renderIntern(internNew)
        }
    })
}