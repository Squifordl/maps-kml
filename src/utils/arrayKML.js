const axios = require('axios');

const githubToken = process.env.TOKEN;
const repoOwner = 'squifordl';
const repoName = 'kml';
const kmlFolderPath = 'folder';

axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${kmlFolderPath}`, {
    headers: {
        'Authorization': `token ${githubToken}`
    }
}).then(response => {
    const kmlUrls = response.data
        .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))
        .map(file => file.html_url);

    console.log(kmlUrls);
}).catch(error => {
    console.error("Erro ao acessar o repositório:", error);
});
