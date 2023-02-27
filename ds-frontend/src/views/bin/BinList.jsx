import React from 'react';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Row from 'react-bootstrap/Row';

import { BinModal } from '../../components';
import { axiosInstance, apiRequest } from "../../services/core/axios";
import './binList.scoped.css';


const mapContainerStyle = {
  height: "400px",
  width: "100%",
}


export default function AllPickupReq(props) {
  const [bins, setBins] = useState([]);
  const [allPickupReq, setAllPickupReq] = useState([]);
  const [view, setView] = useState("List");
  const [viewDetils, setViewDetils] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [show, setShow] = useState(false);


  const modalClose = () => {
    setShow(false)
  };
  const modalShow = (d) => {
    setShow(true)
  }

  useEffect(() => {
    getBins()
  }, []);

  const getBins = () => {
    apiRequest(() => axiosInstance.get(`/api/bin`)).then((res) => {
      setBins(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(bins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(bins.length / itemsPerPage));
  }, [itemOffset, bins]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % bins.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };


  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await apiRequest(() => axiosInstance.delete(`/api/bin/${id}`)).then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your request has been deleted.',
            showConfirmButton: false,
            timer: 2000
          })
          getBins()
        }).catch((err) => {
          console.log(err);
        });

      }
    })
  };


  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="card p-3 d-flex flex-row header">
          <a className={'mx-3 ' + ((view === 'List') ? 'active' : '')} onClick={() => setView("List")}>List</a>
          <a className={'mx-3 ' + ((view === 'Map') ? 'active' : '')} onClick={() => setView("Map")}>Map</a>
        </div>
      </div>
      <div className="row justify-content-end">
        <Button className='new-bin' onClick={modalShow}>New Bin</Button>
      </div>
      <div className="row pt-3">
        {
          view === 'List' &&
          (<>{
            (bins.length > 0) ?
              bins.map((i) => {
                return (
                  <div key={i._id} className="card p-4 mb-3 d-flex flex-row justify-content-between aline-center">
                    <p>Location : {i.location.formatted_address}</p>
                    <div className='r-button d-flex flex-row'>
                      <Button variant="danger" className='text-white ml-2' onClick={() => handleDelete(i._id)}>Delete</Button>
                    </div>
                  </div>
                );
              })
              : (
                <div className="card p-4 mb-3">
                  <div className="d-flex justify-content-between">
                    <div >
                      <p>No Record found</p>
                    </div>
                  </div>
                </div>
              )}
            < ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </>
          )
        }

        {
          view === 'Map' &&
          (
            <Row className='justify-content-center mb-3'>
              <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              >
                <GoogleMap
                  id="marker-example"
                  mapContainerStyle={mapContainerStyle}
                  zoom={15}
                  center={bins[0]?.location}
                >{
                    (bins.length > 0) &&
                    bins.map((i) => {
                      return (
                        <Marker
                          draggable={true}
                          clickable={true}
                          position={i.location}
                        />
                      )
                    })
                  }
                </GoogleMap>
              </LoadScript>
            </Row>
          )
        }

      </div>
      <BinModal
        show={show}
        modalShow={modalShow}
        modalClose={modalClose}
        getBins={getBins} />
    </>
  )
}
