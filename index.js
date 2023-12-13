const axios = require('axios');

const githubToken = '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';
const repoOwner = 'Squifordl';
const repoName = 'kml';
const kmlFolderPath = 'folder';

async function getKmlUrls() {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${kmlFolderPath}`, {
            headers: {
                'Authorization': `token ${githubToken}`
            }
        });

        const kmlUrls = response.data
            .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))
            .map(file => file.html_url);
        console.log(kmlUrls)
        return kmlUrls;
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

getKmlUrls()
