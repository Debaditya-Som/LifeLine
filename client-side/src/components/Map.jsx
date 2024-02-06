import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ location, donorData, recipientData, bloodGroupToCheck }) => {
  const nearestDonors = donorData && donorData.slice(0, 5);

  const displayAvailability = (availability, bloodGroup) => {
    if (availability && bloodGroup) {
      return `Availability for ${bloodGroup}: ${availability[bloodGroup]}`;
    } else {
      return 'No availability information available.';
    }
  };

  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={15}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={[location.latitude, location.longitude]} icon={blueIcon}>
        <Popup>Your location</Popup>
      </Marker>

      {nearestDonors &&
        nearestDonors.map((donor, index) => (
          <Marker
            key={index}
            position={[
              donor.location.coordinates[1],
              donor.location.coordinates[0],
            ]}
            icon={redIcon}
          >
            <Popup>
              <div>
                <h3>{donor.name}</h3>
                <p>Address: {donor.address}</p>
                <p>Coordinates: {donor.location.coordinates.join(', ')}</p>
              </div>
            </Popup>
          </Marker>
        ))}

      {recipientData &&
        recipientData.map((recipient, index) => (
          <Marker
            key={index}
            position={[
              recipient.location.coordinates[1],
              recipient.location.coordinates[0],
            ]}
            icon={greenIcon}
          >
            <Popup>
              <div>
                <h3>{recipient.name}</h3>
                <p>Coordinates: {recipient.location.coordinates.join(', ')}</p>
                <p>{displayAvailability(recipient.availability, bloodGroupToCheck)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default Map;