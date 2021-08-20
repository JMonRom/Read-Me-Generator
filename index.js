const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileSync = util.promisify(fs.writeFile);

const questions = () => {
return inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    }, 
    {
      type: 'input',
      message: 'Enter a short description of your project.',
      name: 'description',
    }, 
    {
      type: 'input',
      message: 'How does the installation process look like?',
      name: 'installation',
    }, 
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
    }, 
    {
      type: 'input',
      message: 'Who are the contributors for this project?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'testing',
    }, 
    {
      type: 'list',
      message: 'What license was used for this project?',
      name: 'license',
      choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    }, 
    {
      type: 'input',
      message: 'What is your email for further questions?',
      name: 'email',
    },    
  ])
}

const generateReadMe = (answer) => 
  `
   <h1 text-align="center"> # ${answer.title} </h1>

   ![Badge]((https://img.shields.io/badge/license-${answer.license}-brightgreen) 
   
   <br />

  ## Description

  ${answer.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${answer.installation}

  ## Usage

  ${answer.usage}

  ## License

  ![Badge]((https://img.shields.io/badge/license-${answer.license}-brightgreen) 

  <br />

  This application is covered under the ${answer.license} license.

  ## Contributing

  ${answer.contributors}

  ## Tests

  ${answer.testing}

  ## Questions

  https://github.com/${answer.github}

  ${answer.email}

  `;

  const start = () => {
    questions()
      .then((answer) =>

      writeFileSync('READMEoutput.md', generateReadMe(answer))
      ) .then(() => console.log('ReadMe created succesfully!'))
      .catch((err) => console.error(err));
  }
  
  start();