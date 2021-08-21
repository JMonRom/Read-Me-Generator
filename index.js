const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadMe = require('./utils/generateReadMe');
const writeFileAsync = util.promisify(fs.writeFile);

function questions() {
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

async function init() {
  try { 
   const answers = await questions();
   const generateFile = generateReadMe(answers);

   await writeFileAsync('./file/READMEoutput.md', generateFile) 

   console.log('ReadMe created succesfully!');
  
  } catch(err) {
    console.error(err);
  }
 }

init();