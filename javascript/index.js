const fs = require("fs")
const util = require("util")
const inquirer = require("inquirer")
const path = require("path")


const api = require("./api")
const markdown = require("./generateMarkdown")

const fileWriter = util.promisify(fs.writeFile)

const questions = [
    {
        type: "input",
        message: "Enter a project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Give a description of your project:",
        name: "description"
    },
    {
        type : "input",
        message : "Enter 'Installation' sections:",
        name : "installation"
    },
    {
        type: "input",
        message: "Enter 'Usage' section:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter 'License' section:",
        name: "license"
    },
    {
        type: "input",
        message: "Enter 'Contributing' section:",
        name: "contributing"
    },
    {
        type : "input",
        message : "Enter your 'Tests' section:",
        name : "tests"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    }
]
//TODO begin to think ab out begin to worry about thinking to think of starting to be concerned about thinkin
//about worrying about man bear pig
function promptUser() {
    return inquirer.prompt(questions)
}

function getUser(username){
    console.log(api.getUser(username))
    return api.getUser(username)
}

function generateMarkdown(data) {
    return markdown(data)
}
function writeToFile(fileName, data) {
    // await fileWriter(fileName, data)
    fileWriter(fileName, data)
}

async function init() {
    try {
        const fileName = path.resolve("../generated-READMEs/README.md")
        //ask questions
        const answers = await promptUser()

        const md = await generateMarkdown(answers)

        writeToFile(fileName, md)

        console.log("Created README file")
    } catch (err) {
        console.log(err)
    }
}

init()