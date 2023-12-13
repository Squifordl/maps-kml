const request = require('request')

const githubToken = process.env.TOKEN;

async function getKmlUrls() {
    try {
        const URL = 'https://github.com/Squifordl/kml/tree/main/folder';
        
        var options = {
          url: URL,
          headers: {
            'Authorization': 'token ' + githubToken
          }
        };

        function callback(error, response, body) {
            console.log(response.statusCode);
            console.error(error);
            console.log(body);
      }
      
      request(options, callback);
      
    } catch (error) {
        console.error("Erro ao acessar o repositório:", error);
        return [];
    }
}

export default getKmlUrls;
