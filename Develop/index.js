// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions that will generate README
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'buildReason',
    message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'lessonsLearned',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'input',
    name: 'thirdPartyAssets',
    message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
  },
  {
    type: 'input',
    name: 'tutorials',
    message: 'If you followed tutorials, include links to those here as well.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license do you want to use? (Provide a link to the license for more information)',
  },
];


// TODO: Create a function to populate the README content into the file.
function generateREADME(answers) {
  // Construct the README content with proper formatting using string concatenation or template literals
  let readmeContent = `# ${answers.projectTitle}\n\n`;

  readmeContent += '## Description\n\n';
  readmeContent += `${answers.description}\n\n`;
  readmeContent += '- What was your motivation?\n';
  readmeContent += `${answers.motivation}\n`;
  readmeContent += '- Why did you build this project? (Note: the answer is not \\"Because it was a homework assignment.")\n';
  readmeContent += `${answers.buildReason}\n`;
  readmeContent += '- What problem does it solve?\n';
  readmeContent += `${answers.problemSolved}\n`;
  readmeContent += '- What did you learn?\n';
  readmeContent += `${answers.lessonsLearned}\n\n`;

  readmeContent += '## Installation\n\n';
  readmeContent += `${answers.installation}\n\n`;

  readmeContent += '## Usage\n\n';
  readmeContent += `${answers.usage}\n\n`;

  readmeContent += '## Credits\n\n';
  readmeContent += `${answers.credits}\n\n`;
  readmeContent += `${answers.thirdPartyAssets}\n\n`;
  readmeContent += `${answers.tutorials}\n\n`;

  readmeContent += '## License\n\n';
  readmeContent += `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n\n`;

  // Return the generated README content
  return readmeContent;
}


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
