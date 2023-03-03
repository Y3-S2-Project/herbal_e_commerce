// import DataTable from 'react-data-table-component'
// import dumyRequestPayments from '../../../data/dumyData'
// import { useNavigate } from 'react-router-dom'
// import BinRequestServices from '../../../services/BinRequestServices'
// import React, { useState, useEffect } from 'react'
// import readMore from '../../../assets/images/table-icon/read-more.png'
// import removeRecord from '../../../assets/images/table-icon/remove_record.png'
// import './viewCompanyPayments.scoped.css'
// import { jsPDF } from 'jspdf'
// import autoTable from 'jspdf-autotable'
// // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr

// const customStyles = {
//   table: {
//     style: {
//       height: '320px', // override the row height
//     },
//   },
//   rows: {
//     style: {
//       height: '32px', // override the row height
//     },
//   },
//   headCells: {
//     style: {
//       paddingLeft: '8px', // override the cell padding for head cells
//       paddingRight: '8px',
//     },
//   },
//   cells: {
//     style: {
//       paddingLeft: '8px', // override the cell padding for data cells
//       paddingRight: '8px',
//     },
//   },
// }
// const Export = ({ onExport }) => (
//   <button className="btn btn-secondary " onClick={onExport}>
//     <i class="fas fa-download fa-lg me-2" style={{ color: '#ffffff' }}></i>
//     Generate Report
//   </button>
// )

// const ViewCompanyPayments = () => {
//   const navigate = useNavigate()

//   const [search, setSearch] = useState('')

//   const [data, setData] = useState([])
//   const [filteredData, setFilteredData] = useState([])
//   const actionsMemo = React.useMemo(() => <Export onExport={() => generatePdf()} />, [])

//   const viewMore = (requestId) => {
//     navigate(`/user/payment/viewonepayment/${requestId}`)
//   }
//   useEffect(() => {
//     BinRequestServices.getAllBinreuests()
//       .then((resp) => {
//         console.log(resp.data.data)

//         const actualData = resp.data.data.filter((oneRequest) => oneRequest['payment'] != null)
//         setData(actualData)
//         setFilteredData(actualData)
//         console.log(actualData)
//       })
//       .catch((e) => {
//         console.log(e.meesage)
//       })
//   }, [])
//   const columns = [
//     {
//       name: 'PAYMENT ID',
//       selector: (row) => row.payment.paymentId,
//       sortable: true,
//     },

//     {
//       name: 'REQUEST ID',
//       selector: (row) => row.requestNo,
//       sortable: true,
//     },
//     {
//       name: 'DATE',
//       selector: (row) => row.payment.paidDate.split('T')[0],
//       sortable: true,
//     },
//     {
//       name: 'AMOUNT',
//       selector: (row) => row.payment.companyPaid,
//       sortable: true,
//     },

//     {
//       name: 'DEDUCTED AMT.',
//       selector: (row) => row.payment.profit,
//       sortable: true,
//     },

//     {
//       cell: (row) => (
//         <div>
//           <button className={'status-btn ' + row.payment.status}>{row.payment.status}</button>
//         </div>
//       ),

//       name: 'CONFIRMATION',
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//     //
//     {
//       cell: (row) => (
//         <div>
//           <button className="mx-auto btn" onClick={() => viewMore(row._id)}>
//             <span className="material-icons">
//               <img src={readMore} alt="" />
//             </span>
//           </button>
//         </div>
//       ),

//       name: 'ACTION',
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ]

//   useEffect(() => {
//     const result = filteredData.filter((dataItem) => {
//       if (search === '') {
//         return dataItem
//       } else if (dataItem.payment.paymentId.toLowerCase().includes(search.toLowerCase())) {
//         return dataItem
//       }
//     })
//     setData(result)
//   }, [search])
//   const generatePdf = () => {
//     console.log('87787')
//     const document = new jsPDF()
//     const tableColumn = ['PAYMENT ID', 'REQUEST ID', 'DATE', 'AMOUNT', 'DEDUCTED AMT.']
//     const tableRows = []

//     data.map((item) => {
//       console.log('87787')
//       const value = [
//         item.payment.paymentId,
//         item.requestNo,
//         item.payment.paidDate.split('T')[0],
//         item.payment.companyPaid,
//         item.payment.profit,
//       ]
//       console.log(value)
//       tableRows.push(value)
//     })

//     document.autoTable(tableColumn, tableRows, { startY: 20 })

//     const date = Date().split(' ')
//     const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]

//     document.text(`Company Payment Report`, 14, 15)
//     document.save(`company_payment_${dateStr}.pdf`)
//   }

//   return (
//     <>
//       <div className="main shadow-lg mb-5 rounded-3 mt-3">
//         <DataTable
//           columns={columns}
//           data={data}
//           pagination
//           fixedHeaderScrollHeight="300px"
//           selecttableRowsHighlighted
//           highlightOnHover
//           // onRowClicked={onRowClicked}
//           data-tag="allowRowEvents"
//           subHeader
//           customStyles={customStyles}
//           subHeaderComponent={
//             <div className="w-100">
//               {' '}
//               <input
//                 type="text"
//                 className="w-25 form-control font-color float-center mt-0.5 me-2"
//                 placeholder="Search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               ></input>
//             </div>
//           }
//           actions={actionsMemo}
//         />
//       </div>
//     </>
//   )
// }

// export default ViewCompanyPayments
