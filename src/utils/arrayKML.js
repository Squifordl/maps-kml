const urls = [
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/51_CANOAS_ENVIO.kmz?token=AO3VETHCHQPXBCAJTYUMEPTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/51_NOVO_HAMBURGO_ENVIAR.kmz.kml?token=AO3VETE5SJFYVDUDM4GCEI3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/AEROCLUBE.kmz%20(1).kml?token=AO3VETDNVZOXY62CKTMB3ADFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/AEROCLUBE.kmz.kml?token=AO3VETBFDL5OGYGKZB5IRY3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/ARROIO_DO_MEIO.kml?token=AO3VETE2LKJYUCO7PGX72GLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/AT_TOTAL.kmz.kml?token=AO3VETEXRBCNJ7EC5L5DFPLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CACHOEIRA%20-%20TOTAL.kml?token=AO3VETENHRDOJYKLAZDTIELFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CACHOEIRA%20DO%20SUL.kmz.kml?token=AO3VETFABIBPE343PUO2DWLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CACHOERINHA%20-%20PARCIAL.kmz.kml?token=AO3VETAWM4MTJFGN2RQBKA3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CAMAQUA%20CNT.kmz.kml?token=AO3VETBUKOIJHRKGZ42HGWTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CARAZINHO.kml?token=AO3VETF5JL3ENPXRSFPHPSTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CHARQUEADAS_CNT.kml?token=AO3VETCYQM2UD2I5UDLOR4DFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CNT.kmz%20(1).kml?token=AO3VETBYBMN24F4YUY6MCNTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CNT.kmz.kml?token=AO3VETE26WDHEYWAKQYRZDDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/CTO%20-%20BATISTTI.kml?token=AO3VETH3T7TNGQHJTTZM6V3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Cachoeira%20do%20Sul%20-%20CNT.kmz%20(1).kml?token=AO3VETH5M3X2YUZO3DPXBQ3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Cachoeira%20do%20Sul%20-%20CNT.kmz.kml?token=AO3VETAS7IO5GP4B2Z3GUJ3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/ERECHIM%20(1).kml?token=AO3VETHYU4TAUYHPZFPXBFDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/ERECHIM.kml?token=AO3VETBGYHQA2IVE4Q3RHQLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/ESTEIO.kml?token=AO3VETAE3ASD4ZQNJOU43VTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/ESTEIO_LAN01.kmz.kml?token=AO3VETBXJEWRZBCRZUASG3TFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Imbé.kmz.kml?token=AO3VETF4K6GFPZLBT4VAORTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (1).kml?token=AO3VETGWN7RU5RFQCP75SBTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (123).kml?token=AO3VETC7K27NANGHXUSV363FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (2).kml?token=AO3VETCUIZUHNKAXI3WUFP3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (3).kml?token=AO3VETHQBAQANEHOCXVII4TFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (4).kml?token=AO3VETFCPMUC7IM6RL4BRTTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários (5).kml?token=AO3VETHE6IVY77BEYX7YDRDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários.kml?token=AO3VETAQOMVCCANHUVOHMTTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Lugares temporários3.kml?token=AO3VETBPB6VVEIUX4KPBUBDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Montenegro.kmz%20(1).kml?token=AO3VETCXFDHQNDRHZUA4LJLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Montenegro.kmz.kml?token=AO3VETECKJARKIAQBKR2OFTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/NOVO_HAMBURGO.kml?token=AO3VETCPEY6LYKQ5264S3J3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/PASSO%20FUNDO.kmz.kml?token=AO3VETCVTH5TS3S4IY2LIEDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/PORTO_ALEGRE.kml?token=AO3VETDZNDQG2UP2GZKSKYTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/PORTO_ALEGRE.kmz.kml?token=AO3VETAIRM7N5PK3KARKADLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Projeto Divisão_BGE.kml?token=AO3VETCV6DDO3FLQE6BVOU3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/QUINTA%20DA%20BOA%20VISTA.kml?token=AO3VETDAW33HYCWVRE7LPN3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/RIO%20PARDO%20-%20CNT.kmz.kml?token=AO3VETHJYZPPLXOBJXOMOPTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/RIO%20PARDO.kmz.kml?token=AO3VETC5NS73756CDKKQY3TFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Rosario%20do%20Sul_RS.kmz%20(1).kml?token=AO3VETGMTFMRFX3N2Q5BZIDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Rosario%20do%20Sul_RS.kmz.kml?token=AO3VETC5DBJW5A57YXOLRELFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SANTANA DO LIVRAMENTO TOTAL +HID AGREG.kmz.kml?token=AO3VETCB5VDPYJNQSXGSQVDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAO%20LEOPOLDO%20-%20FEITORIA.kmz.kml?token=AO3VETFSXMPUAFTN7OQSXYDFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAO%20LEOPOLDO.kml?token=AO3VETAQTRM5MPFIL2UGVDLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAO_GABRIEL.kmz.kml?token=AO3VETFWYPOZGFVZAOKNF6DFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAPUCAIA_DO_SUL.kml?token=AO3VETCLUWD6JQDRC2XWRCLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAPUCAIA_DO_SUL_LAN01.kmz%20(1).kml?token=AO3VETCC6HAXZZ2SDFPFEX3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/SAPUCAIA_DO_SUL_LAN01.kmz.kml?token=AO3VETEDUUC7MG4EEYKELW3FPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/VERA%20CRUZ%20-%20ARC.kmz.kml?token=AO3VETBP3ENWN6CIRZ4XIBTFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/VTAL_SUL.kml?token=AO3VETDFDLF42QRRM3LHJKLFPHQEK',
    'https://raw.githubusercontent.com/Squifordl/kml/main/folder/Venâncio Aires.kmz.kml?token=AO3VETG5V56LVMCKDOLTP23FPHQEK'
]

export default urls