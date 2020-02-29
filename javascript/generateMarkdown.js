function generateMarkdown(data) {

    return `# ${data.title}

![js badge](https://img.shields.io/badge/Made%20With:-Javascript-yellow)

## Description
${data.description}

# Table Contents 
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Username](#username)


# Installation 
${data.installation}

# Usage
${data.usage}

# License
${data.license}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Username
${data.username}
`
}//

module.exports = generateMarkdown;
