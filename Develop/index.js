// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions that will generate README
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error occurred while writing file:', err);
    } else {
      console.log('Your README file was successfully generated!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use the answers to generate the README content
      const readmeContent = generateREADME(answers);
      // Specify the filename to write the generated content
      const fileName = 'README.md';
      // Call the writeToFile function to write the generated content to file
      writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred while prompting user:', error);
    });
}

// Function call to initialize app
init();
