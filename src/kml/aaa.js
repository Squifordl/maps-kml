const fs = require('fs-extra');
const path = require('path');

const directoryPath = './';
const outputFilePath = './GERAL.kml';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Erro ao ler o diretório: ", err);
        return;
    }

    let kmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n';
    let kmlDocuments = [];

    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === '.kml') {
            try {
                const data = fs.readFileSync(path.join(directoryPath, file), 'utf8');
                const documentStart = data.indexOf('<Document>');
                const documentEnd = data.indexOf('</kml>');
                if (documentStart !== -1 && documentEnd !== -1) {
                    kmlDocuments.push(data.substring(documentStart, documentEnd));
                }
            } catch (readError) {
                console.error(`Erro ao ler o arquivo ${file}:`, readError);
            }
        }
    });

    let kmlData = kmlHeader + kmlDocuments.join('\n') + '\n</kml>';

    try {
        fs.writeFileSync(outputFilePath, kmlData, 'utf8');
        console.log('Arquivos KML combinados com sucesso!');
    } catch (writeError) {
        console.error("Erro ao escrever o arquivo combinado:", writeError);
    }
});