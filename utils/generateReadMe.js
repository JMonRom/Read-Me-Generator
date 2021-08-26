// Followed professional readme guide to create a function containg good readme layout
function generateReadMe(answer) {
  return `

   <h1 align="center"># ${answer.title} </h1>
  
  ![badge](https://img.shields.io/badge/license-${answer.license}-red) <br />

  ## Description

  ${answer.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${answer.installation}

  ## Usage

  ${answer.usage}

  ## License

  ![badge](https://img.shields.io/badge/license-${answer.license}-red) 

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
}

module.exports = generateReadMe;
