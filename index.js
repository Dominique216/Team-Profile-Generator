const inquirer = require('inquirer')
const fs = require('fs')
const engineers = require('./lib/engineer')
// const { finished } = require('stream')
// asks info about engineer
engineerQs = () => {
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
        const engineerNew = new engineers.Engineer(data.EngineersName, data.EngineersId,data.EngineersEmail ,data.EngineersGit)
        engineers.renderEngineer(engineerNew)
        nextup(data);
    })
}

// asks info about interns
internQs = () => {
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
            message: "What is your intern's Office Number?",
            name: 'InternsOffice'
        },
        {
            type: 'checkbox',
            message: "Would you like to add a new team member",
            name: 'options',
            choices: ['Add Engineer', 'Add Intern', 'Finish building my team'],
        } 
    ])
    .then((data) => nextup(data))
}


// will add the ending tags to index.html when the user id done adding employees
finished = () => {
    fs.appendFile('index.html', `</main>
<script src="https://kit.fontawesome.com/24e32b4f06.js" crossorigin="anonymous"></script>
</body>
</html>`, (err) => console.log(err))
}

// calls the function questions corresponding to which team member you want to add
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
    .then((data) => nextup(data))
    

