const axios = require('axios');

const githubToken = process.env.TOKEN;
const repoOwner = 'squifordl';
const repoName = 'kml';

axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}`, {
    headers: {
        'Authorization': `token ${githubToken}`
    }
}).then(response => {
    const kmlUrls = response
        .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))

    console.log(kmlUrls);
}).catch(error => {
    console.error("Erro ao acessar o repositório:", error);
});

