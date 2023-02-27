import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import Moment from 'moment';
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Swal from 'sweetalert2'

import { axiosInstance, apiRequest } from "../../services/core/axios";

import './binModal.scoped.css';


const mapContainerStyle = {
  height: "200px",
  width: "100%",
}

export default function BinModal(props) {
  const [form, setForm] = useState({})
  const [collectAt, setCollectAt] = useState('');
  const [validated, setValidated] = useState(false);
  const [multiselectstyle, setMultiselectstyle] = useState({
    chips: {
      background: '#17d193'
    },
    highlightOption: {
      background: '#17d193'
    },
  });

  useEffect(() => {
    setForm({
      location: '',
      openingTime: '',
      closingTime: '',
    })
  }, [props]);


  useEffect(() => {
    geolocation()
  }, []);

  const geolocation = () => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) setForm({
          ...form,
          location: { lat: location.coords.latitude, lng: location.coords.longitude },
        })
      });
    };
  }

  const handleSelectChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }


  function ChangeLocation(e) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.latLng.lat()},${e.latLng.lng()}&key=${process.env.REACT_APP_GOOGLE_CLIENT_ID}`).then((res) => {
      // console.log(res);
      setForm({
        ...form,
        location: { lat: e.latLng.lat(), lng: e.latLng.lng(), formatted_address: res.data.results[0].formatted_address }
      })
    })
      .catch((error) => {         // handle error
        console.log(error);
      })
  }

  const checkValidity = (e) => {
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inForm = e.currentTarget;
    checkValidity()
    console.log(form);
    if (inForm.checkValidity() === false || !form.location.lat || !form.location.lng || checkValidity()) {
      setValidated(true);
    } else {
      await apiRequest(() => axiosInstance.post(`/api/bin`, form)).then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'New bin added',
          showConfirmButton: false,
          timer: 2000
        })
        props.getBins()
        props.modalClose()
        setValidated(false);
      }).catch((err) => {
        console.log(err);
      });
    }

  };


  return (
    <>
      <Modal show={props.show} onHide={props.modalClose} size="lg">
        <Modal.Header closeButton className='position-relative'>

        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                <Col md="2">
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Control
                    required
                    readOnly
                    type="text"
                    placeholder="Location"
                    value={form.location?.formatted_address}
                    name="location"
                    className='font-s'
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className='justify-content-center mb-3'>
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleMap
                  id="marker-example"
                  mapContainerStyle={mapContainerStyle}
                  zoom={15}
                  center={form.location}
                  onClick={ChangeLocation}
                >
                  <Marker
                    onDragEnd={ChangeLocation}
                    draggable={true}
                    clickable={true}
                    position={form.location}
                  />
                </GoogleMap>
              </LoadScript>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                <Col md="2">
                  <Form.Label>Opening Time</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Control
                    required
                    type="time"
                    placeholder="Cpening Time"
                    onChange={handleSelectChange}
                    value={form.openingTime}
                    name="openingTime"
                    className='font-s'
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                <Col md="2">
                  <Form.Label>Closing Time</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Control
                    required
                    type="time"
                    placeholder="Closing Time"
                    onChange={handleSelectChange}
                    value={form.closingTime}
                    name="closingTime"
                    className='font-s'
                  />
                </Col>
              </Form.Group>
            </Row>
            <div className="row justify-content-end">
              <Button type='submit'>Add Bin</Button>
            </div>
          </Form>
        </Modal.Body >
      </Modal >
    </>
  );
}