import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import { Multiselect } from 'multiselect-react-dropdown'
import Swal from 'sweetalert2'

import { axiosInstance, apiRequest } from '../../services/core/axios'

import './itemAddModal.scoped.css'
import ImageUploadForm from './imageUpload/ImageUpload'

export default function ItemAddModal(props) {
  const [form, setFormData] = useState({
    name: '',
    imageUrl: [],
  })

  useEffect(() => {}, [props])

  const handleCancel = async (e) => {
    Swal.fire({
      title: 'Are you sure cancel?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest(() =>
          axiosInstance.delete(`/api/pickupRequest/${props.viewDetils._id}`, form),
        )
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Canceled!',
              text: 'Your request has been canceled.',
              showConfirmButton: false,
              timer: 2000,
            })
            // props.getPickupReq()
            // props.detilsModalClose()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }
  const handleSubmit = async (e) => {}
  const handleSelectChange = (e) => {}

  return (
    <>
      <Modal show={props.show} onHide={props.itemAddModalClose} size="xl">
        <Modal.Header className="position-relative">
          <strong>
            <h5> Add new Item</h5>
          </strong>
          <button
            className="btn btn-sm btn-danger tw-bg-red-500 tw-text-black tw-absolute tw-top-0 tw-right-0 tw-m-2 tw-w-8"
            type="button"
            aria-label="Close"
            onClick={props.itemAddModalClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <p className="r-date"></p>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <div className="logo-img">
                <ImageUploadForm setFormData={setFormData} />
              </div>
              <h5>{}</h5>
              <p>{}</p>
            </div>
            <div className="col-md-8">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom01"
                    className="d-flex mb-3"
                  >
                    <Col md="2">
                      <Form.Label>Location</Form.Label>
                    </Col>
                    <Col md="10">
                      <Form.Control
                        required
                        readOnly
                        type="text"
                        placeholder="Location"
                        onChange={handleSelectChange}
                        value={form.location?.formatted_address}
                        name="location"
                        className="font-s"
                      />
                    </Col>
                  </Form.Group>
                  <Row className="justify-content-center mb-3"></Row>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                    <Col md="3">
                      <Form.Label>Waste Types</Form.Label>
                    </Col>
                    <Col md="9">
                      <Multiselect
                        required
                        className="from-control"
                        isObject={false}
                        selectedValues={form.wasteTypes}
                        options={['Plastic', 'Glass', 'Iron']}
                        placeholder="Waste Types"
                      />
                      {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Col>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                    <Col md="3">
                      <Form.Label>Size</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Select
                        required
                        onChange={handleSelectChange}
                        name="size"
                        value={form.size}
                        className="d-flex"
                      >
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
                  <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                    <Col md="3">
                      <Form.Label>Note</Form.Label>
                    </Col>
                    <Col md="9">
                      <Form.Control
                        type="text"
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
                {props.viewDetils?.requestStatus !== 'Rejected' ||
                props.viewDetils?.requestStatus !== 'Pending' ? (
                  <Row>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="d-flex mb-2"
                    >
                      <Col md="3">
                        <Form.Label>Collect At</Form.Label>
                      </Col>
                      <Col md="9">
                        <Form.Label></Form.Label>
                      </Col>
                    </Form.Group>
                  </Row>
                ) : null}
                <Col md="12" className="d-flex justify-content-end">
                  {/* <Button>Reset</Button> */}

                  <Button
                    type="button"
                    onClick={handleCancel}
                    variant="danger"
                    className="mx-2 tw-bg-red-500"
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Add</Button>
                </Col>
              </Form>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}
