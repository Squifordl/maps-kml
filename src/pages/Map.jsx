import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import kmlUrls from '../utils/arrayKML';
import './css/Map.css';

function MapComponent() {
    const mapRef = useRef(null);
    const searchBoxRef = useRef(null);
    const scriptURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDslUlwET6q743dgoKMa2BD-gfpIF_4vUo&libraries=places&callback=initMap`;
    const [showPopup, setShowPopup] = useState(false);
    const [cep, setCep] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [viab, setViab] = useState(false);
    const [viabi, setViabi] = useState(false);
    const [enderecoViacep, setEnderecoViacep] = useState({
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: '',
    });
    const [showForm, setShowForm] = useState(false);

    const handleViabilidadeClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setViab(false);
        setViabi(false);
        setShowForm(false);
    };

    const handleNewConsulta = () => {
        setCep('');
        setNumeroCasa('');
        setShowPopup(false);
        setViab(false);
        setViabi(false);
        setShowForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const cepDigitsOnly = cep.replace(/\D/g, '');

        try {
            const response = await axios.get(
                `https://api.amxrest.net/viability/${cepDigitsOnly}/${numeroCasa}`
            );

            const enderecoResponse = await axios.get(`https://viacep.com.br/ws/${cepDigitsOnly}/json/`);
            const dadosViacep = enderecoResponse.data;

            console.log('Response Data:', dadosViacep);
            if (mapRef.current) {
                setViabi(true);

                if (
                    response.data.data.technologies.some(
                        (tech) => tech.name === 'Cable' && tech.tv && tech.phone && tech.internet
                    )
                ) {
                    setViab(true);
                    console.log('Viab set to true');
                } else {
                    setViab(false);
                    console.log('Viab set to false');
                }

                setEnderecoViacep({
                    logradouro: dadosViacep.logradouro || response.data.data.logradouro,
                    bairro: dadosViacep.bairro || response.data.data.bairro,
                    cidade: dadosViacep.localidade || response.data.data.cidade,
                    uf: dadosViacep.uf || response.data.data.uf,
                });

                setShowPopup(true);
            }
        } catch (error) {
            console.error('Erro na requisição da API:', error);
            setViab(false);
            setShowPopup(true);
        }
    };

    useEffect(() => {
        window.initMap = function () {
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 11,
                center: { lat: -30.0346, lng: -51.2177 },
                mapTypeId: 'satellite'
            });

            const loadKmlLayer = (url, index) => {
                setTimeout(() => {
                    const kmlLayer = new window.google.maps.KmlLayer({
                        url: url,
                        map: map,
                        preserveViewport: true,
                    });

                    window.google.maps.event.addListener(kmlLayer, 'status_changed', function () {
                        console.log(`Status do KML (${url}):`, kmlLayer.getStatus());
                    });
                }, 500 * index);
            };

            kmlUrls.forEach((url, index) => {
                loadKmlLayer(url, index);
            });

            const mapTypeControlOptions = {
                style: window.google.maps.MapTypeControlStyle.BOTTOM_CENTER,
                position: window.google.maps.ControlPosition.HORIZONTAL_BAR,
            };
            map.setOptions({ mapTypeControlOptions });

            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            let marker;

            const searchBox = new window.google.maps.places.SearchBox(searchBoxRef.current);

            searchBox.addListener('places_changed', () => {
                const places = searchBox.getPlaces();

                if (places.length === 0) {
                    return;
                }

                if (marker) {
                    marker.setMap(null);
                }

                const bounds = new window.google.maps.LatLngBounds();
                places.forEach(place => {
                    if (!place.geometry) return;

                    marker = new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: map,
                        title: place.name,
                    });

                    bounds.extend(place.geometry.location);
                });
                map.fitBounds(bounds);
            });
        }

        if (!document.querySelector(`script[src="${scriptURL}"]`)) {
            const script = document.createElement('script');
            script.src = scriptURL;
            script.defer = true;
            script.async = true;
            document.head.appendChild(script);
        }
    }, [scriptURL]);

    const handleCepChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        setCep(numericValue);
    };
    
    return (
        <>
            <div className="button-container">
                <button onClick={handleViabilidadeClick}>Verificar Viabilidade</button>
            </div>
            <div className={`popup-container ${showPopup ? 'visible' : ''}`}>
                <div className="popup-content">
                    <span className="close-popup" onClick={handlePopupClose}>
                        &times;
                    </span>
                    {viabi ? (
                        viab ? (
                            <div className="response-container">
                                <h3 className="viab-message">Seu endereço está viável</h3>
                                <div className="address-info">
                                    <p>{`Logradouro: ${enderecoViacep.logradouro}`}</p>
                                    <p>{`Número: ${numeroCasa}`}</p>
                                    <p>{`Cep: ${cep}`}</p>
                                </div>
                                <div className="button-container">
                                    <button type="button" onClick={handleNewConsulta}>
                                        Consultar
                                    </button>
                                </div>
                                {showForm && (
                                    <form onSubmit={handleFormSubmit}>
                                        <label htmlFor="cep">CEP:</label>
                                        <input type="text" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} />
                                        <label htmlFor="numeroCasa">Número da Casa:</label>
                                        <input
                                            type="text"
                                            id="numeroCasa"
                                            value={numeroCasa}
                                            onChange={(e) => setNumeroCasa(e.target.value)}
                                        />
                                        <div className="button-container">
                                            <button type="submit">Enviar</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        ) : (
                            <div className="response-container">
                                <h3 className="viab-message">Seu endereço não está viável</h3>
                                <div className="button-container">
                                    <button type="button" onClick={handleNewConsulta}>
                                        Consultar
                                    </button>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="question-container">
                            <form onSubmit={handleFormSubmit}>
                                <label htmlFor="cep">CEP:</label>
                                <input type="text" id="cep" value={cep} onChange={handleCepChange} />
                                <label htmlFor="numeroCasa">Número da Casa:</label>
                                <input
                                    type="text"
                                    id="numeroCasa"
                                    value={numeroCasa}
                                    onChange={(e) => setNumeroCasa(e.target.value)}
                                />
                                <div className="button-container">
                                    <button type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <div className="map-container" ref={mapRef}></div>
            <div className="search-container">
                <input ref={searchBoxRef} className="search-bar" type="text" placeholder="🔍 Pesquisar Endereço..." />
            </div>
        </>
    );
}

export default MapComponent;