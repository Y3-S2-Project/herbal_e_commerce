import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default function MapModal(props) {

  const mapContainerStyle = {
    height: "350px",
    width: "700px"
  }


  function ChangeLocation(e) {
    console.log(e);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.latLng.lat()},${e.latLng.lng()}&key=${process.env.REACT_APP_GOOGLE_CLIENT_ID}`).then((res) => {
      // console.log(res);
      props.setForm({
        ...props.form,
        location: { lat: e.latLng.lat(), lng: e.latLng.lng(), formatted_address: res.data.results[0].formatted_address }
      })
    })
      .catch((error) => {         // handle error
        console.log(error);
      })
    // console.log(props.form.location);
  }

  const onLoad = marker => {
    // console.log('marker: ', marker)
  }

  return (
    <>
      <Modal show={props.show} onHide={props.mapModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='justify-content-center'>
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
              <GoogleMap
                id="marker-example"
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={props.form.location}
                onClick={ChangeLocation}
              >
                <Marker
                  onDragEnd={ChangeLocation}
                  draggable={true}
                  clickable={true}
                  onLoad={onLoad}
                  position={props.form.location}
                />
              </GoogleMap>
            </LoadScript>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
