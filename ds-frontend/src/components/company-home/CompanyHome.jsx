import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './companyhome.scoped.css'
import TopNav from '../topnav/TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CompanyHome(props) {
  const id = '631b7cf1a68686de53c791a3'

  const [centers, setCenters] = useState('')
  const [slogan, setSlogan] = useState('')
  const [about, setAbout] = useState('')

  return (
    <div>
      <TopNav />
      {/* <div className='companyhome-row'>
         <h2 className='companyhome-header'>Go Cleaners</h2>
        <div className='companyhome-container'>
          <div className='companyhome-container1'>
           <div className="companyhome-content">
           <h4 className='contact-box-header'>Contact Our Recycling Company</h4> <br />
              <div className="contact-box3">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </div>
              <div className="contact-box">
                <div className="contact-telephone">{props.telephone}</div>
                <div className="contact-address">{props.address}</div>
                <div className="contact-email"> {props.email}</div>
              </div>
              <div className="contact-box2">
                <div className="contact-imag2"> <img
                className="img-contactpage2"
                src="
                https://us.123rf.com/450wm/orla/orla1306/orla130600025/20489851-3d-people-man-person-with-button-contact-us-.jpg?ver=6"
                alt=""
              /></div>
                <div className="contact-address">Open Hour-{props.openhour}</div>
                <div className="contact-email"> Close Hour-{props.closehour}</div>
              </div>
              <div className="contact-social-media">
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
    
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
     
                
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
    
              </div>
            </div>
           
        
           
          </div>
          <div className='companyhome-container3'>
            <div className="companyhome-container2">
            <img className="img-companyhome"
          src="
          https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700278/61547748-happy-green-recycle-bin-cartoon-mascot-character-waving-for-greeting-illustration-isolated-on-white-.jpg"
          alt=""
        />
            </div>
         
          </div>
          <div className='companyhome-container-location1'>
            <div className="companyhome-container-location2">
           gdfgfgfgfgfgfgf
        <div className="location-card">
            gfgfgfgfg
        </div>
            </div>
         
          </div>
        </div>
        </div> */}
      <div className="companyhomelogoimg">
        <img
          className="img-homepagelogo"
          src="
          https://img.freepik.com/free-vector/royal-logo-concept-design-with-crown-shape_1017-33265.jpg"
          alt=""
        />
      </div>

      <div className="companyhomerow">
        <div className="companyhomecontainer">
          <div className="companyhomecontainer-content">
            <div className="companyhomecontainer-div1">Let's Keep Our Environment Clean</div>
            <div className="companyhomecontainer-div2">
                <div className="companyletstart">
                   <div className="letsstart-content"> Let's Start !</div>
                   </div>
                </div>
            <div className="companyhomecontainer-div3">
            <div className="companyhome-bottom-section">+10000 <br/>Customers</div>
            <div className="companyhome-bottom-section">12 <br/>Centers</div>
            </div>
            {props.about}
          </div>
        </div>
        <div className="companyhomecontainer1">
          <div className="companycontainer1-content">
            <img
              className="img-homepagecontent"
              src="
                     https://previews.123rf.com/images/inegvin/inegvin1901/inegvin190100009/126476536-rubbish-bin-for-recycling-different-types-of-waste-garbage-container-for-organic-and-food-trash-vect.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="companyhomecontainer2">
          fdfdfdfddfdaassgghhjjkkoouufreed
        </div>
      </div>
    </div>
  )
}

export default CompanyHome
