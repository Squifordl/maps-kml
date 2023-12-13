const axios = require('axios');

const githubToken = process.env.TOKEN;
const repoOwner = 'Squifordl';
const repoName = 'kml';
const kmlFolderPath = 'folder'; // Certifique-se de que este é o caminho correto da pasta dentro do repositório

async function getKmlUrls() {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${kmlFolderPath}`, {
            headers: {
                'Authorization': `token ${githubToken}`
            }
        });

        const kmlUrls = response.data
            .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))
            .map(file => file.download_url); // Aqui usamos download_url para obter o link direto para download

        return kmlUrls;
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

export default getKmlUrls;
