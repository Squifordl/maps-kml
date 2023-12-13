const axios = require('axios');

const githubToken = process.env.TOKEN;
const repoOwner = 'squifordl';
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

        return kmlUrls;
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

export default getKmlUrls;
