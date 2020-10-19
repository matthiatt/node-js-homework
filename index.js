//---------------------- Sources ---------------------//
// https://commonmark.org/help/
// https://medium.com/@er.bharat1992/writing-readme-md-markdown-file-file-bd711d1afbfa
//https://shields.io/

const fs = require("fs");
const inquirer = require("inquirer");
// const { inherits } = require("util");
let md = require("markdown-it")();

const questions = [

{
    type: "input",
    name: "title",
    Message: "what is the message of your project?"
},
{
    type: "input",
    name: "description",
    message: "please write a description about the project."
},
{
    type: "input",
    name: "installation",
    message:"what are the installation instructions?"
},
{
    type: "input",
    name: "license",
    message: "where any license's used in this project?"
},
{
    type: "input",
    name: "usage",
    message: "describe the usage"
},
{
    type: "input",
    name: "contributing",
    message: "what roles am I contributing?"
},
{
    type: "input",
    name: "projectStatus",
    message: "what is the project's status?"
},
];
console.clear();

inquirer
    .prompt(questions).then(response => {
        fs.appendFileSync("README.md", ("# " + response.title) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
        fs.appendFileSync("README.md", ("## " + response.description) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
        fs.appendFileSync("README.md", ("## " + response.installation) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
            fs.appendFileSync("README.md", ("## " + response.license) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
            fs.appendFileSync("README.md", ("## " + response.usage) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
            fs.appendFileSync("README.md", ("## " + response.contributing) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
            fs.appendFileSync("README.md", ("## " + response.projectStatus) + "\n", function(err){
            if(err) {
                return console.log(err);
            }
            console.log("success");
        });
    }).then(function({name, userlocation})) {
    fs.writeFile("index.html", generateHtml(name), function(err) {
        if(err) throw err;
        console.log("success");
    })
    }
    function generateHtml(name) {
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <h1>${myname}</h1>
    </div>
</body>
</html>
        `
    }