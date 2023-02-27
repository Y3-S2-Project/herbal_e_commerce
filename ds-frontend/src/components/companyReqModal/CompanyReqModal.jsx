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

import './companyReqModal.scoped.css';


const mapContainerStyle = {
  height: "200px",
  width: "100%",
}

export default function CompanyReqModal(props) {
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
      location: props.viewDetils.location,
      wasteTypes: props.viewDetils.wasteTypes,
      size: props.viewDetils.size,
      note: props.viewDetils.note,
    })
  }, [props]);


  const handleSelectChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const changeWasteTypes = (value) => {
    setForm({
      ...form,
      wasteTypes: value,
    })
  }
  const removeWasteTypes = (value) => {
    setForm({
      ...form,
      wasteTypes: value,
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
    if (form.wasteTypes == undefined || form.wasteTypes.length == 0) {
      setMultiselectstyle({
        chips: {
          background: '#17d193'
        },
        highlightOption: {
          background: '#17d193'
        },
        searchBox: {
          border: '1px solid #dc3545'
        }
      })
      return true;
    } else {
      setMultiselectstyle({
        chips: {
          background: '#17d193'
        },
        highlightOption: {
          background: '#17d193'
        },
      })
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inForm = e.currentTarget;
    checkValidity()
    if (inForm.checkValidity() === false || !form.location.lat || !form.location.lng || checkValidity()) {
      setValidated(true);
    } else {
      await apiRequest(() => axiosInstance.patch(`/api/pickupRequest/${props.viewDetils._id}`, {
        collectAt, requestStatus: 'Accepted'
      })).then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Request successfully accepted',
          showConfirmButton: false,
          timer: 2000
        })
        props.getPickupReq()
        props.detilsModalClose()
        setValidated(false);
      }).catch((err) => {
        console.log(err);
      });
    }

  };

  const handleReject = async (e) => {
    Swal.fire({
      title: 'Are you sure reject?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reject'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest(() => axiosInstance.patch(`/api/pickupRequest/${props.viewDetils._id}`, {
          requestStatus: 'Rejected'
        })).then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Rejected!',
            text: 'Your request has been rejected.',
            showConfirmButton: false,
            timer: 2000
          })
          props.getPickupReq()
          props.detilsModalClose()
        }).catch((err) => {
          console.log(err);
        });

      }
    })
  };

  const handleComplete = async (e) => {
    Swal.fire({
      title: 'Are you sure Complete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest(() => axiosInstance.patch(`/api/pickupRequest/${props.viewDetils._id}`, {
          requestStatus: 'Completed'
        })).then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Completed!',
            text: 'Your request has been completed.',
            showConfirmButton: false,
            timer: 2000
          })
          props.getPickupReq()
          props.detilsModalClose()
        }).catch((err) => {
          console.log(err);
        });

      }
    })
  };

  return (
    <>
      <Modal show={props.show} onHide={props.detilsModalClose} size="lg">
        <Modal.Header closeButton className='position-relative'>
          <strong><h5>#{props.viewDetils.requestNo} - {props.viewDetils.requestedBy?.name.first_name} {props.viewDetils.requestedBy?.name.last_name}</h5></strong>
          <p className='r-date'>{Moment(props.viewDetils.createdAt).format('DD-MM-YYYY hh:mm:ss')}</p>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {/* <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <div className='logo-img'>
                <img src={props.viewDetils?.requestReceivedBy?.logo} alt="" className="img-thumbnail rounded" />
              </div>
              <h5>{props.viewDetils?.requestReceivedBy?.name}</h5>
              <p>{props.viewDetils?.requestReceivedBy?.telephone}</p>
            </div> */}
            <div className="col-md-12">
              <div className="row d-flex flex-row justify-content-center ">

                <Row >
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex mb-2'>
                    <Col md="3">
                      <Form.Label>Customer Name</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Label>{props.viewDetils.requestedBy?.name.first_name} {props.viewDetils.requestedBy?.name.last_name}</Form.Label>
                    </Col>
                  </Form.Group>
                </Row>
                <Row >
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex mb-2'>
                    <Col md="3">
                      <Form.Label>Phone number</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Label>{props.viewDetils.requestedBy?.phone}</Form.Label>
                    </Col>
                  </Form.Group>
                </Row>
                <Row >
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex mb-2'>
                    <Col md="3">
                      <Form.Label>Email</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Label>{props.viewDetils.requestedBy?.email}</Form.Label>
                    </Col>
                  </Form.Group>
                </Row>
                <Row >
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex mb-3'>
                    <Col md="3">
                      <Form.Label>Location</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Control
                        required
                        readOnly
                        type="text"
                        placeholder="Location"
                        onChange={handleSelectChange}
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
                        // onDragEnd={ChangeLocation}
                        // draggable={true}
                        clickable={true}
                        position={form.location}
                      />
                    </GoogleMap>
                  </LoadScript>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                    <Col md="3">
                      <Form.Label>Waste Types</Form.Label>
                    </Col>
                    <Col md="9">
                      <Multiselect
                        required
                        disable
                        className='from-control'
                        isObject={false}
                        onSelect={changeWasteTypes} // Function will trigger on select event
                        onRemove={removeWasteTypes}
                        selectedValues={
                          form.wasteTypes
                        }
                        options={[
                          'Plastic',
                          'Glass',
                          'Iron',
                        ]}
                        placeholder="Waste Types"
                        style={multiselectstyle}
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Col>
                  </Form.Group>
                </Row>
                <Row className='mb-3'>
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                    <Col md="3">
                      <Form.Label>Size</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Select disabled required onChange={handleSelectChange} name="size" value={form.size} className="d-flex">
                        <option value="">Select Size</option>
                        <option value="Small">Small</option>
                        <option value="Mediam">Mediam</option>
                        <option value="Large">Large</option>
                      </Form.Select>
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                    <Col md="3">
                      <Form.Label>Note</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Control
                        type="text"
                        readOnly
                        placeholder="Note"
                        onChange={handleSelectChange}
                        name="note"
                        value={form.note}
                        className="font-s"
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Col>
                  </Form.Group>
                </Row>
                <Form onSubmit={handleSubmit}>
                  {props.viewDetils?.requestStatus === 'Pending' ? (
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                        <Col md="3">
                          <Form.Label>Collect At</Form.Label>
                        </Col>
                        <Col md="9">
                          <Form.Control
                            required
                            type="datetime-local"
                            placeholder="Note"
                            onChange={(e) => setCollectAt(e.target.value)}
                            name="note"
                            value={collectAt}
                            className="font-s"
                          />
                          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Col>
                      </Form.Group>
                    </Row>) : props.viewDetils?.requestStatus !== 'Rejected' ? (
                      <Row >
                        <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex mb-2'>
                          <Col md="3">
                            <Form.Label>Collect At</Form.Label>
                          </Col>
                          <Col md="9">
                            <Form.Label>{Moment(props.viewDetils.collectAt).format('DD-MM-YYYY hh:mm')}</Form.Label>
                          </Col>
                        </Form.Group>
                      </Row>) : null
                  }
                  <Col md="12" className='d-flex justify-content-end'>
                    {/* <Button>Reset</Button> */}
                    {props.viewDetils?.requestStatus === 'Pending' &&
                      <>
                        <Button type="button" onClick={handleReject} variant="danger" className='mx-2' >Reject</Button>
                        <Button type="submit"  >Accept</Button>
                      </>}
                    {props.viewDetils?.requestStatus === 'Accepted' &&
                      <>
                        <Button type="button" onClick={handleComplete} >Complete</Button>
                      </>}
                  </Col>
                </Form>
              </div>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}