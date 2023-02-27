import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Moment from 'moment';
import ReactPaginate from 'react-paginate';
import jsPDF from "jspdf";
import "jspdf-autotable";

import { CompanyReqModal } from '../../../components';
import { axiosInstance, apiRequest } from "../../../services/core/axios";
import './companyPickupReq.scoped.css';

export default function CompanyPickupReq(props) {
  const [pickupReq, setPickupReq] = useState([]);
  const [allPickupReq, setAllPickupReq] = useState([]);
  const [requestStatus, setRequestStatus] = useState("All");
  const [viewDetils, setViewDetils] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [show, setShow] = useState(false);


  const detilsModalClose = () => {
    setShow(false)
  };
  const detilsModalShow = (d) => {
    setShow(true)
    setViewDetils(d)
  }

  useEffect(() => {
    getPickupReq()
  }, []);


  const getPickupReq = () => {
    apiRequest(() => axiosInstance.get(`/api/pickupRequest`)).then((res) => {
      setPickupReq(res.data);
      setAllPickupReq(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pickupReq.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pickupReq.length / itemsPerPage));
  }, [itemOffset, pickupReq]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % pickupReq.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };


  useEffect(() => {
    const results = allPickupReq.filter((r) => {
      if (requestStatus == 'All') return true;
      if (r.requestStatus == requestStatus) return true;
      return false;
    });
    setPickupReq(results);
  }, [requestStatus]);

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Accepted List";
    const headers = [["Request No", "Customer Name", "Phone number", "email", "size", "Note", "Type", "Collect At", "Loaction "]];

    const data = allPickupReq.filter((r) => r.requestStatus === 'Accepted').map(elt =>
      [elt.requestNo,
      elt.requestedBy.name.first_name + " " + elt.requestedBy.name.last_name,
      elt.requestedBy.phone,
      elt.requestedBy.email,
      elt.size,
      elt.note,
      elt.wasteTypes,
      elt.collectAt,
      elt.location.formatted_address,
      ]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`Accepted_List_${getFormattedTime()}.pdf`)
  }

  function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
  }

  return (
    <>
      <div className="row ">
        <div className="card p-3 d-flex flex-row header">
          <a className={'mx-3 ' + ((requestStatus === 'All') ? 'active' : '')} onClick={() => setRequestStatus("All")}>All</a>
          <a className={'mx-3 ' + ((requestStatus === 'Pending') ? 'active' : '')} onClick={() => setRequestStatus("Pending")}>Pending</a>
          <a className={'mx-3 ' + ((requestStatus === 'Accepted') ? 'active' : '')} onClick={() => setRequestStatus("Accepted")}>Accepted</a>
          <a className={'mx-3 ' + ((requestStatus === 'Rejected') ? 'active' : '')} onClick={() => setRequestStatus("Rejected")}>Rejected</a>
          <a className={'mx-3 ' + ((requestStatus === 'Completed') ? 'active' : '')} onClick={() => setRequestStatus("Completed")}>Completed</a>
          <Button type="button" className='text-light ' onClick={exportPDF} variant="secondary" ><i class="fas fa-download text-light mr-2"></i> Get Accepted List</Button>
        </div>
      </div>
      <div className="row pt-3">
        {
          (currentItems.length > 0) ?
            currentItems.map((i) => {
              return (
                <div key={i._id} className="card p-4 mb-3">
                  <div className="d-flex justify-content-between card-heder">
                    <button className={'status-btn ' + i.requestStatus}>{i.requestStatus}</button>
                    <div className='header-r'>
                      <p>Request No: <strong>{i.requestNo}</strong></p>
                      <p>Date: {Moment(i.createdAt).format('DD-MM-YYYY hh:mm:ss')}</p>
                    </div>
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h5>{i.requestedBy?.name.first_name} {i.requestedBy?.name.last_name}</h5>
                      <p>Size : {i.size}</p>
                      <p><i className="fas fa-thumbtack"></i>  Loaction : {i.location.formatted_address}</p>
                    </div>
                    <div className='d-flex align-items-end'>
                      <button className='btn btn-primary' onClick={(e) => detilsModalShow(i)}> Show Details</button>
                    </div>
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
            )
        }
        <ReactPaginate
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
      </div>
      <CompanyReqModal
        show={show}
        viewDetils={viewDetils}
        detilsModalShow={detilsModalShow}
        detilsModalClose={detilsModalClose}
        getPickupReq={getPickupReq} />
    </>
  )
}
