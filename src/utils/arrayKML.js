const axios = require('axios');
require('dotenv').config()

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
        console.log(response)

        const kmlUrls = response.data
            .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))
            .map(file => file.download_url);

        return kmlUrls;
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

export default getKmlUrls;
