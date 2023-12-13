const urls = [
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/51_CANOAS_ENVIO.kmz',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/51_NOVO_HAMBURGO_ENVIAR.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/AEROCLUBE.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/AEROCLUBE.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/ARROIO_DO_MEIO.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/AT_TOTAL.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CACHOEIRA%20-%20TOTAL.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CACHOEIRA%20DO%20SUL.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CACHOERINHA%20-%20PARCIAL.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CAMAQUA%20CNT.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CARAZINHO.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CHARQUEADAS_CNT.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CNT.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CNT.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/CTO%20-%20BATISTTI.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Cachoeira%20do%20Sul%20-%20CNT.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Cachoeira%20do%20Sul%20-%20CNT.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/ERECHIM%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/ERECHIM.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/ESTEIO.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/ESTEIO_LAN01.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Imb%C3%A9.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(123).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(2).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(3).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(4).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios%20(5).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Lugares%20tempor%C3%A1rios3.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Montenegro.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Montenegro.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/NOVO_HAMBURGO.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/PASSO%20FUNDO.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/PORTO_ALEGRE.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/PORTO_ALEGRE.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Projeto%20Divis%C3%A3o_BGE.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/QUINTA%20DA%20BOA%20VISTA.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/RIO%20PARDO%20-%20CNT.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/RIO%20PARDO.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Rosario%20do%20Sul_RS.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Rosario%20do%20Sul_RS.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SANTANA%20DO%20LIVRAMENTO%20TOTAL%20%2BHID%20AGREG.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAO%20LEOPOLDO%20-%20FEITORIA.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAO%20LEOPOLDO.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAO_GABRIEL.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAPUCAIA_DO_SUL.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAPUCAIA_DO_SUL_LAN01.kmz%20(1).kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/SAPUCAIA_DO_SUL_LAN01.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/VERA%20CRUZ%20-%20ARC.kmz.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/VTAL_SUL.kml',
    'https://raw.githubusercontent.com/Squifordl/kml/blob/main/folder/Ven%C3%A2ncio%20Aires.kmz.kml'
  ]

export default urls