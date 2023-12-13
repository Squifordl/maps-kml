const Octokit = require('octokit');

const githubToken = process.env.TOKEN;
const repoOwner = 'squifordl';

async function getKmlUrls() {
    try {
        const octokit = new Octokit({
            auth: githubToken
          })
          
          const tt = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: repoOwner,
            repo: 'kml',
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })

          console.log(tt)
        // const kmlUrls = response.data
        //     .filter(file => file.name.endsWith('.kml') || file.name.endsWith('.kmz'))
        //     .map(file => file.html_url);

        

        // return kmlUrls;
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

export default getKmlUrls;
