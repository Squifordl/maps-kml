import React, { useRef, useEffect } from 'react';
import getKmlUrls from '../utils/arrayKML';
import './css/Map.css'

function MapComponent() {
    const mapRef = useRef(null);
    const searchBoxRef = useRef(null);
    const scriptURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDslUlwET6q743dgoKMa2BD-gfpIF_4vUo&libraries=places&callback=initMap`;

    useEffect(() => {
        window.initMap = function () {
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 11,
                center: { lat: -30.0346, lng: -51.2177 },
                mapTypeId: 'satellite'
            });


            getKmlUrls().then(url => {
                const kmlLayer = new window.google.maps.KmlLayer({
                    url: url,
                    map: map,
                });

                window.google.maps.event.addListener(kmlLayer, 'status_changed', function () {
                    console.log(`Status do KML (${url}):`, kmlLayer.getStatus());
                });
            });

            const mapTypeControlOptions = {
                style: window.google.maps.MapTypeControlStyle.BOTTOM_CENTER,
                position: window.google.maps.ControlPosition.HORIZONTAL_BAR,
            };
            map.setOptions({ mapTypeControlOptions });

            const trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            const searchBox = new window.google.maps.places.SearchBox(searchBoxRef.current);
            map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(searchBoxRef.current);

            searchBox.addListener('places_changed', () => {
                const places = searchBox.getPlaces();

                if (places.length === 0) {
                    return;
                }

                const bounds = new window.google.maps.LatLngBounds();
                places.forEach(place => {
                    if (!place.geometry) return;
                    bounds.extend(place.geometry.location);
                });
                map.fitBounds(bounds);
            });
        };

        if (!document.querySelector(`script[src="${scriptURL}"]`)) {
            const script = document.createElement('script');
            script.src = scriptURL;
            script.defer = true;
            script.async = true;
            document.head.appendChild(script);
        }
    }, [scriptURL]);
    return (
        <>
            <input ref={searchBoxRef} className="search-bar" type="text" placeholder="🔍 Pesquisar Endereço..." />
            <div className="map-container" ref={mapRef}></div>
        </>
    );
}

export default MapComponent;